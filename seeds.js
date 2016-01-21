var seeder = require('mongoose-seed');

seeder.connect('mongodb://localhost:27017/behave', function() {
  seeder.loadModels(['models/student.js']);

  seeder.clearModels(['Student'], function() {
    seeder.populateModels(data);
  });
});

var data = [
  {
    'model': 'Student',
    'documents': [
      {
        'first_name': 'Lisa',
        'last_name': 'Gaetjens',
        'num_positives': 8,
        'num_negatives': 0
      },
      {
        'first_name': 'Naomi',
        'last_name': 'Riemer',
        'num_positives': 6,
        'num_negatives': 1
      },
      {
        'first_name': 'Nathan',
        'last_name': 'Riemer',
        'num_positives': 5,
        'num_negatives': 2
      }
    ]
  }
];