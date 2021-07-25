export interface Campaign{
  id:number;
    title: string;
    descr:string;
    imageUrl:string;
    endDate: string;
    fund: number;
}


export const CAMPAIGNS = [
  {
    id:1,
    title:"Help Anna Find Elsa",
    descr:"Elsa ran away because Anna makes her angry. Anna felt bad so she decided to find Elsa and make her the Queen of Arrandelle. However, Anna's parents died on a boating accident so she has no money for transportation to the ice castle. Let's help her",
    imageUrl:"https://lumiere-a.akamaihd.net/v1/images/pp_frozen_herobanner_20501_185ef872.jpeg?region=0,0,2048,878",
    endDate:"1 January 2078",
    fund:1000
  },
  {
    id:2,
    title:"Help Cookie Monster",
    descr:"Cus why not?",
    imageUrl:"assets/images/cookie.jpeg",
    endDate:"4 July 2021",
    fund:256
  },
  { 
    id:3,
    title:"So Cady can buy pink clothes",
    descr:"Cady just started a new chapter of her life in a new school. Due to peer pressure, she has to wear pink outfit on Wednesday. Poor Cady.. Let's help her!",
    imageUrl:"assets/images/mean.jpeg",
    endDate:"5 August 2021",
    fund:150
  }
];