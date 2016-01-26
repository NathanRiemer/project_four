# Data

### Student

- id
- First Name
- Last Name
- Possible in the future:
- Contacts (a list of objects that contain):
  - Email Address
  - First Name
  - Last Name
  - Title (Mr./Mrs. etc)
  - Relationship to student
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
- Timestamp
- Note text
- Class_id
- Teacher_id
- Student_id

### Class

- id
- Grade
- Name
- Subject
- Teachers:
  - Teacher_id
- Students:
  - Student_id
