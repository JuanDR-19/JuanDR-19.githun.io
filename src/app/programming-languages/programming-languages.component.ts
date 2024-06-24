import { Component } from '@angular/core';

@Component({
  selector: 'app-programming-languages',
  templateUrl: './programming-languages.component.html',
  styleUrls: ['./programming-languages.component.css']
})
export class ProgrammingLanguagesComponent {
  pl = [
    {
      name: 'Java',
      image: 'assets/java.png',
      experience: '5 years of experience'
    },
    {
      name: 'Python',
      image: 'assets/python.png',
      experience: '4 years of experience'
    },
    {
      name: 'C++',
      image: 'assets/c++.png',
      experience: '5 years of experience'
    },
    {
      name: 'C',
      image: 'assets/c.png',
      experience: '4 years of experience'
    },
    {
      name: 'Kotlin',
      image: 'assets/kotlin.png',
      experience: '3 years of experience'
    },
    {
      name: 'HTML',
      image: 'assets/html.png',
      experience: '3 years of experience'
    },
    {
      name: 'CSS',
      image: 'assets/css.png',
      experience: '3 years of experience'
    }
  ];
  fm = [
    {
      name: 'Angular',
      image: 'assets/angular.png',
      experience: '3 years of experience'
    },
    {
      name: 'Spring',
      image: 'assets/spring.png',
      experience: '3 years of experience'
    },
    {
      name: 'Springboot',
      image: 'assets/springboot.png',
      experience: '3 years of experience'
    },
    {
      name: 'Django',
      image: 'assets/django.png',
      experience: '2 years of experience, still learning it'
    }
  ];
  db = [
    {
      name: 'MariaDB',
      image: 'assets/mariadb.png',
    },
    {
      name: 'SQL',
      image: 'assets/sql.png',
    },
    {
      name: 'Neo4J',
      image: 'assets/neo4j.png',
    },
    {
      name: 'FireBase',
      image: 'assets/firebase.png',
    },
    {
      name: 'MongoDB',
      image: 'assets/mongodb.png',
    }
  ];
}
