/*
  # Update contact_messages table policies

  1. Security Changes
    - Add policy for public to insert messages
    - Add policy for anon to view messages (for testing)
    - Keep existing authenticated users policy
*/

-- Enable public access for inserting messages
CREATE POLICY "Allow public to insert messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow anonymous access for viewing messages (for development/testing)
CREATE POLICY "Allow anonymous to view messages"
  ON contact_messages
  FOR SELECT
  TO anon
  USING (true);