import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  lang = [
    {
      name: 'Spanish',
      image: 'assets/colombia.png',
      experience: 'Native'
    },
    {
      name: 'English',
      image: 'assets/english.svg',
      experience: 'B2-C1 EFC Test'
    },
    {
      name: 'Japanese',
      image: 'assets/japanese.png',
      experience: 'N3-N2 (pending for JLPT grading)'
    },
    {
      name: 'Italian',
      image: 'assets/italy.png',
      experience: 'Basic'
    },
    {
      name: 'French',
      image: 'assets/french.png',
      experience: 'Basic'
    }
  ]
}
