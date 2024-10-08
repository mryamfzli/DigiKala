import { Injectable } from '@angular/core';
import { Raket } from './about';
import { noop } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutProService {

  constructor() { }

  raketList:Raket[]=[
    {imgSrc:"https://dkstatics-public.digikala.com/digikala-products/ec54443741130d61df06f4977f2371363de06dd5_1696018113.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    id:1 ,price:"800,300 تومان" , title:"راکت بدمینتون مدل POR 305206 tf بسته دو عددی",discount:'',spacialSale:" ",jg:"لاستیک",ag:"US: 4 1/8 - Euro: 1",as:"متوسط 677 - 597"},
    {imgSrc:"https://dkstatics-public.digikala.com/digikala-products/3387693.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
  ,id:2 ,price:"760,000 تومان",title:"راکت بدمینتون یونکس مدل Pro 3008 بسته 2 عددی" ,discount:'20%',spacialSale:" فروش ویژه",jg:"لاستیک",ag:"US: 4 1/8 - Euro: 1، 6/8 3",as:"متوسط 677 - 597"},
    {imgSrc:"https://dkstatics-public.digikala.com/digikala-products/a8668182f3b58b3ecd2a4e81697f84f4b94b5488_1673029770.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
  ,id:3 ,price:"680,000 تومان",title:"راکت بدمینتون ویش مدل FUSIONTEC 2000" ,discount:'',spacialSale:" ",jg:"لاستیک",ag:"US: 4 1/8 - Euro: 1",as:"متوسط 677 - 597"},
    {imgSrc:"https://dkstatics-public.digikala.com/digikala-products/a518cc02e05078c940f78d47527e73e7aa8d730d_1675720109.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
  ,id:4 ,price:"890,000 تومان",title:"راکت بدمینتون مدل 7075 SP" ,discount:'',spacialSale:" ",jg:"لاستیک",ag:"US: 4 3/8 - Euro: 3",as:"متوسط 677 - 597"},
    {imgSrc:"https://dkstatics-public.digikala.com/digikala-products/3999482.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
  ,id:5 ,price:"920,800 تومان",title:"راکت بدمینتون فاکس مدل Super Power بسته 2 عددی" ,discount:'',spacialSale:" ",jg:"فوم",ag:"US: 4 1/2 - Euro: 4",as:"متوسط 677 - 597"},
    {imgSrc:"https://dkstatics-public.digikala.com/digikala-products/c5ba8fa15264d4843a0af5253495455d4fc8db54_1665760783.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
  ,id:6 ,price:"580,000 تومان",title:"اکت بدمینتون مدل pro516 بسته دو عددی" ,discount:'',spacialSale:" ",jg:"چرم",ag:"US: 4 1/8 - Euro: 1",as:"متوسط 677 - 597"},
    {imgSrc:"https://dkstatics-public.digikala.com/digikala-products/49c5aa7bc0503372827b52635589efb04c104da4_1699693011.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
  ,id:7 ,price:"790,000 تومان",title:"راکت بدمینتون مدل DF_257 بسته دو عددی" ,discount:'15%',spacialSale:"فروش ویژه",jg:"لاستیک",ag:"US: 4 1/8 - Euro: 1",as:"متوسط 677 - 597"},
    {imgSrc:"https://dkstatics-public.digikala.com/digikala-products/12e8da5bbd2f19711e72b69f12e2b2500294fe71_1703066916.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
  ,id:8 ,price:"700,070 تومان",title:"راکت بدمینتون تالبوت تورو مدل Eli Mini" ,discount:'',spacialSale:" ",jg:"لاستیک",ag:"US: 4 1/8 - Euro: 1",as:"بزرگ 741 - 678"},

  ]

  getProduct(id:number){
    return this.raketList.find(product => product.id == id);
  }

    
  }





