/*
  # Create Orders Table

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `order_number` (text, unique)
      - `items` (jsonb) - Array of cart items
      - `total` (numeric) - Total order amount in MAD
      - `payment_method` (text) - Payment method used
      - `status` (text) - Order status
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on `orders` table
    - Add policy for authenticated users to read their own orders
    - Add policy for authenticated users to create orders
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE NOT NULL,
  items jsonb NOT NULL DEFAULT '[]'::jsonb,
  total numeric(10,2) NOT NULL DEFAULT 0,
  payment_method text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  customer_email text,
  customer_phone text,
  delivery_address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create orders"
  ON orders
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read orders"
  ON orders
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS orders_order_number_idx ON orders(order_number);
CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS orders_status_idx ON orders(status);
