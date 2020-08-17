export interface HomeInterface {
  aboutAsData: [{
    id: number;
    firstName: string;
    img: string;
    description: string;
    job: string;
  }],
  boxServicesData: [{
    id: number;
    boxName: string;
    img: string;
    route: string;
  }],
  slides:[
    {
      headline: string;
      ghilimele: string;
      src: string;
      text: string;
      authorName: string
    }
  ];
}