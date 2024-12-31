/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS
    - Add policies for insert and select
*/

-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public to insert messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow viewing messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow anonymous to view messages"
  ON contact_messages
  FOR SELECT
  TO anon
  USING (true);