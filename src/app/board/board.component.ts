import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  

  items = [
    { id: 0, title: 'TODO', tasks: tasks },
    { id: 1, title: 'IN PROGRESS', tasks: tasks2 },
    { id: 2, title: 'DONE', tasks: tasks1 },
  ]

  trackByFn = (item: any) => `${item.id}__${item.title}`
}


export const tasks = [
  { 
    id: 0, 
    title: 'Some task'
  },
  { 
    id: 1, 
    title: 'Some task'
  },
  { 
    id: 2, 
    title: 'Some task'
  },
  { 
    id: 3, 
    title: 'Some task'
  },
]
export const tasks1 = [
  { 
    id: 0, 
    title: 'Some task'
  },
  { 
    id: 1, 
    title: 'Some task'
  },
  { 
    id: 2, 
    title: 'Some task'
  },
  { 
    id: 3, 
    title: 'Some task'
  },
  { 
    id: 3, 
    title: 'Some task'
  },
  { 
    id: 3, 
    title: 'Some task'
  },
  { 
    id: 3, 
    title: 'Some task'
  },
]
export const tasks2 = [
  { 
    id: 0, 
    title: 'Some task'
  },
  { 
    id: 1, 
    title: 'Some task'
  },
  { 
    id: 2, 
    title: 'Some task'
  },
  { 
    id: 3, 
    title: 'Some task'
  },
  { 
    id: 3, 
    title: 'Some task'
  },
  { 
    id: 3, 
    title: 'Some task'
  },
  { 
    id: 3, 
    title: 'Some task'
  },
  { 
    id: 3, 
    title: 'Some task'
  },
  { 
    id: 3, 
    title: 'Some task'
  },
]