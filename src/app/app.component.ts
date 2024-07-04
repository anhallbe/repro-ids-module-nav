import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {

  actions: Action[] = INITIAL_ACTIONS;

  ngAfterViewInit() {
    setTimeout(() => {
      this.actions = [...this.actions, ...DELAYED_ACTIONS];
    }, 1000)
  }
}

const INITIAL_ACTIONS: Action[] = [
  {
    text: "Home",
    icon: "home",
  },
  {
    text: "Warehouse",
    icon: "warehouse",
    children: [
      "Warehouse 1",
      "Warehouse 2",
      "Warehouse 3",
    ],
  },
  {
    text: "Shirts",
    icon: "shirt",
    children: [
      "Shirt 1",
      "Shirt 2",
      "Shirt 3",
    ],
  },
  {
    text: "Trucks",
    icon: "truck",
    children: [
      "Truck 1",
      "Truck 2",
      "Truck 3",
    ],
  }
];

const DELAYED_ACTIONS: Action[] = [
  {
    text: "Delayed",
    icon: "clock",
    children: [
      "Delayed 1",
      "Delayed 2",
      "Delayed 3",
    ],
  },
];

type Action = {
  text: string;
  icon: string;
  children?: string[];
}
