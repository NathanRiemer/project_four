# Data

### Student

- id
- First Name
- Last Name
- Contacts (a list of objects that contain):
  - Email Address
  - First Name
  - Last Name
  - Title (Mr./Mrs. etc)
  - Relationship to student
- Classes:
  - Status (eg current)
  - Class_id
- Username
- Password


### Teacher

- id
- First Name
- Last Name
- Username
- Password
- Classes List
  - Class_id

### Behavior Record

- Type (Good, Bad, Note)
- Creator (teacher)
- Timestamp
- Note text (if a note)
- Class_id
- Teacher_id
- Student_id

### Class
- Grade
- Name
- Year
- Active?
- Teachers:
  - Role (eg head teacher)
  - Teacher_id
- Students:
  - Student_id
