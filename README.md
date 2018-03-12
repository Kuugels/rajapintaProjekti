# rajapintaProjekti
Avoimet rajapinnat ja avoin data kurssin projekti

Käytetyt tekniikat:
- Frontend: jQuery, Javascript, Bootstrap, CSS, HTML5
- Backend: Node.js
- Tietokanta: MongoDB

[Linkki sivulle](https:\\albuminfo.herokuapp.com "Albuminfo sivu")

| **GET** | Albums |
| :--- | :--- |
| Show all albums |  ```/albums``` |
| Get album by ID | ```/albums/:albumId``` |
| Get albums from artist | ```/albums/artist/:artist``` |

| **POST** | Albums |
| :--- | :--- |
| Add new album |  ```/albums``` |

| **PUT** | Albums |
| :--- | :--- |
| Update album |  ```/albums/:albumId``` |

| **DELETE** | Albums |
| :--- | :--- |
| Delete album |  ```/albums/:albumId``` |

**Data format**
```
{
   songs: [String],
   _id: ID,
   albumID, number,
   artist: String,
   release_date: String,
   album_art: String
}
```

Example API call
 - ```https:\\albuminfo.herokuapp.com/albums/artist/Burzum```

Result:

```
[{"songs":["Burzum","Jesu død","Beholding the Daughters of the Firmament","Decrepitude I","Rundtgåing av den transcendentale     egenhetens støtte","Decrepitude II"],"_id":"5aa25cc6734d1d3717fd6bc6","albumID":4,"artist":"Burzum","album":"Filosofem","release_date":"1-1-1996","album_art":"burzum.jpg"}]
  ```
