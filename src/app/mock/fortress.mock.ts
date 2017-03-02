import { Fortress } from '../model/fortress.model';
import { Image } from '../model/image.model';

export const FORTRESSES: Fortress[] = [

    {
        id: 1005,
        name: 'Sumeg',
        country: 'Hungary',
        defaultImage: {id: 2005, url: 'app/mock/images/sumeg-1.jpg', caption: 'Sumeg castle'} ,
        description: 'Sümeg Castle is a castle by the town of Sümeg, Veszprém county, Hungary. Built in the mid or late 13th century by Béla IV of Hungary, Sümeg Castle is situated atop a mountain called "Castle Hill", 20 miles north of Lake Balaton. During its existence, it has been expanded several times. In the 15th century, it was fortified, and the second of two towers was built. It has been under siege several times, and has experienced two fires. Today, it is the main tourist attraction for visitors to Sümeg.',
        history: `This castle was originally built in the mid or late 13th century by Béla IV of Hungary, where he lived during the Mongolian invasion between 1241-1242. Later, it was presented as a gift to the Roman Catholic Archdiocese of Veszprém by Stephen V of Hungary.
        In 1552, in response to the capture of Veszprém by the Turks, the castles was rebuilt and fortified to serve as a frontier fortress.
        In 1713, after the Austrian occupation during Rákóczi's War for Independence, troops set the castle on fire.
        During the 20th century, parts of the castle were restored.
        Since 1989, it has been privately held. It was restored on a large scale, and is now operated as a tourist attraction, providing events and tournaments. It is considered to be Hungary's most well-preserved fortress.`
    },
    {
        id: 1006,
        name: 'Golconda Fort',
        country: 'India',
        defaultImage: {id: 2006, url: 'app/mock/images/golconda-fort-2.jpg', caption: ''},
        description: '',
        history: ''
    },
     {
        id: 1007,
        name: 'Khotyn',
        country: 'Ukraine',
        defaultImage: {id: 2007, url: 'app/mock/images/khotyn-1.jpg', caption: ''},
        description: '',
        history: ''
    },
    {
        id: 1008,
        name: 'Roquetaillade',
        country: 'France',
        defaultImage: {id: 2008, url: 'app/mock/images/roquetaillade-1.jpg', caption: ''},
        description: '',
        history: ''
    },
     {
        id: 1001,
        name: 'Akkerman Fortress',
        country: 'Ukraine',
        defaultImage: {id:2001, url: 'app/mock/images/akkerman-fortress-2.jpg', caption: ''},
        description: '',
        history: ''
    },
    {
        id: 1003,
        name: 'Veste Rothenberg',
        country: 'Germany',
        defaultImage: {id: 2003, url: 'app/mock/images/veste-rothenberg-1.jpg', caption: ''},
        description: '',
        history: ''
    },
    {
        id: 1004,
        name: 'Ribat of Monastir',
        country: 'Tunisia',
        defaultImage: {id: 2004, url: 'app/mock/images/ribat-of-monastir-1.jpg', caption: ''},
        description: '',
        history: '' 
    },
    {
        id: 1009,
        name: 'Dover',
        country: 'England',
        defaultImage: {id: 2009, url: 'app/mock/images/dover-1.jpg', caption: ''},
        description: '',
        history: '' 
    },
    {
        id: 1002,
        name: 'Boldogko',
        country: 'Hungary',
        defaultImage: {id: 2002, url: 'app/mock/images/boldogko-1.jpg', caption: ''},
        description: '',
        history: ''
    }
    
]