/*
  # Create contact messages table with proper policies

  1. Table Structure
    - contact_messages table with required fields
    - Timestamps for tracking
  
  2. Security
    - Enable RLS
    - Allow public inserts
    - Allow viewing for authenticated users
*/

-- Create the contact_messages table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Allow public to insert messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to view messages
CREATE POLICY "Allow viewing messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);