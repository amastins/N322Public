import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  lists: any = [
      {
          title: "Shades of Red",
          shades: [
              {
                  shadeName: "apple",
                  code: "Hex #960018",
                  code2: "RGB 150, 0, 24"
              },
              {
                  shadeName: "berry",
                  code: "Hex #D21F3C",
                  code2: "RGB 210,31,60"
              },
              {
                  shadeName: "blood",
                  code: "Hex #960018",
                  code2: "RGB 150,0,24"
              },
              {
                  shadeName: "blush",
                  code: "Hex #CD5C5C",
                  code2: "RGB 205,92,92"
              },
              {
                  shadeName: "brick",
                  code: "Hex #B22222",
                  code2: "RGB 187,34,34"
              },
              {
                  shadeName: "candy",
                  code: "Hex #FF0800",
                  code2: "RGB 255,8,0"
              },
              {
                  shadeName: "cherry",
                  code: "Hex #ED2939",
                  code2: "RGB 237,41,57"
              },
              {
                  shadeName: "crimson",
                  code: "Hex #B80F0A",
                  code2: "RGB 255,40,0"
              },
              {
                  shadeName: "currant",
                  code: "Hex #8D021F",
                  code2: "RGB 141,2,31"
              },
              {
                  shadeName: "garnet",
                  code: "Hex #C21807",
                  code2: "194,24,7"
              },
              {
                  shadeName: "jam",
                  code: "Hex #D21F3C",
                  code2: "RGB 210,31,60"
              },
              {
                  shadeName: "lipstick",
                  code: "Hex #BF0A30",
                  code2: "RGB 191,10,48"
              },
              {
                  shadeName: "mahogany",
                  code: "Hex #420D09",
                  code2: "RGB 66,13,9"
              },
              {
                  shadeName: "merlot",
                  code: "Hex #7E191B",
                  code2: "RGB 126,25,27"
              },
              {
                  shadeName: "persian",
                  code: "Hex #CA3433",
                  code2: "RGB 202,52,51"
              },
              {
                  shadeName: "rose",
                  code: "Hex #EA3C53",
                  code2: "RGB 234,60,83"
              },
              {
                  shadeName: "ruby",
                  code: "Hex #E0115F",
                  code2: "RGB 224,17,95"
              },
              {
                  shadeName: "sangria",
                  code: "Hex #5E1914",
                  code2: "RGB 94,25,20"
              },
              {
                  shadeName: "scarlet",
                  code: "Hex #FF2400",
                  code2: "RGB 255,36,0"
              },
              {
                  shadeName: "wine",
                  code: "Hex #8D021F",
                  code2: "RGB 141,2,31"
              }
          ]
      },
      {
          title: "Shades of Orange",
          shades: [
              {
                  shadeName: "amber",
                  code: "Hex #D68A59",
                  code2: "RGB 214,138,89"
              },
              {
                  shadeName: "apricot",
                  code: "Hex #FDD9B5",
                  code2: "RGB 253,217,181"
              },
              {
                  shadeName: "basketball",
                  code: "Hex #FFD700",
                  code2: "RGB 255,69,0"
              },
              {
                  shadeName: "candlelight",
                  code: "Hex #FFA474",
                  code2: "RGB 255,164,116"
              },
              {
                  shadeName: "carrot",
                  code: "Hex #FF8243",
                  code2: "RGB 255,130,67"
              },
              {
                  shadeName: "creamsicle",
                  code: "Hex #FFCFAB",
                  code2: "RGB 255,207,171"
              },
              {
                  shadeName: "ginger",
                  code: "Hex #E7C697",
                  code2: "RGB 231,198,151"
              },
              {
                  shadeName: "gold",
                  code: "Hex #FFD700",
                  code2: "RGB 255,215,0"
              },
              {
                  shadeName: "macaroni and cheese",
                  code: "Hex #FFBD88",
                  code2: "RGB 255,189,136"
              },
              {
                  shadeName: "monarch",
                  code: "Hex #FF6E4A",
                  code2: "RGB 255,110,74"
              },
              {
                  shadeName: "melon",
                  code: "FDBCB4",
                  code2: "RGB 253,188,180"
              },
              {
                  shadeName: "orangutan",
                  code: "Hex #DD9475",
                  code2: "RGB 221,148,117"
              },
              {
                  shadeName: "papaya",
                  code: "Hex #FFCFAB",
                  code2: "RGB 255,207,171"
              },
              {
                  shadeName: "pumpkin",
                  code: "Hex #FFA343",
                  code2: "RGB 255,163,67"
              },
              {
                  shadeName: "salamander",
                  code: "Hex #EFCDB8",
                  code2: "RGB 239,205,184"
              },
              {
                  shadeName: "sherbert",
                  code: "Hex #FD7C6E",
                  code2: "RGB 253,124,110"
              },
              {
                  shadeName: "soap",
                  code: "Hex #FF7F50",
                  code2: "RGB 255,127,80"
              },
              {
                  shadeName: "starfish",
                  code: "Hex #FF6347",
                  code2: "RGB 255,99,71"
              },
              {
                  shadeName: "sunrise",
                  code: "Hex #FF8C00",
                  code2: "RGB 255,140,0"
              },
              {
                  shadeName: "tangerine",
                  code: "Hex #FFA500",
                  code2: "RGB 255,140,0"
              }
          ]
      }
  ];

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

}
