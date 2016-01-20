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
  - Role
  - Class_id

### Behavior Record

- Type (Good, Bad, Note)
- Timestamp
- Note text (if a note)
- Class_id
- Teacher_id
- Student_id

### Class
- id
- Grade
- Name
- Subject
- Year
- Active?
- Teachers:
  - Role (eg head teacher)
  - Teacher_id
- Students:
  - Student_id
