import { Component } from '@angular/core';
import { roundstar_db } from 'src/app/core/db/roundstar.db';

@Component({
  selector: 'app-bottomcover',
  templateUrl: './bottomcover.component.html',
  styleUrls: ['./bottomcover.component.scss']
})
export class BottomcoverComponent {
  information: any [] = [
    {logo:"./assets/images/brand/svg/phone.svg", detail:"+1012 3456 789"},
    {logo:"./assets/images/brand/svg/eemail.svg", detail:"demo@gmail.com"},
    {logo:"./assets/images/brand/svg/location.svg", detail:"132 Dartmouth Street Boston, Massachusetts 02156 United States"}
  ];
  thelogos: any[] = [
    {social:"./assets/images/brand/svg/twitter.svg"},
    {social:"./assets/images/brand/svg/insta.svg"},
    {social:"./assets/images/brand/svg/discord.svg"}
  ];
  array: any [] = [
    {names:"First Name"},
    {names:"Last Name"},
    {names:"Email"},
    {names:"Phone Number"}
  ]
}
