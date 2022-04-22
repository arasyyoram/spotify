// Mock response for MSW

const playlistResponse = {
  track: {
    href: "https://api.spotify.com/v1/search?query=one+ok+rock&type=track&market=ID&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=8",
    items: [
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
              },
              href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
              id: "7k73EtZwoPs516ZxE72KsO",
              name: "ONE OK ROCK",
              type: "artist",
              uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/4OKBuE9F8MTCV7nnsBRcsK",
          },
          href: "https://api.spotify.com/v1/albums/4OKBuE9F8MTCV7nnsBRcsK",
          id: "4OKBuE9F8MTCV7nnsBRcsK",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2733e4b149dd3110f1432bfeca0",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e023e4b149dd3110f1432bfeca0",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048513e4b149dd3110f1432bfeca0",
              width: 64,
            },
          ],
          name: "Niche Syndrome",
          release_date: "2010-06-09",
          release_date_precision: "day",
          total_tracks: 13,
          type: "album",
          uri: "spotify:album:4OKBuE9F8MTCV7nnsBRcsK",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
            },
            href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
            id: "7k73EtZwoPs516ZxE72KsO",
            name: "ONE OK ROCK",
            type: "artist",
            uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
          },
        ],
        disc_number: 1,
        duration_ms: 295600,
        explicit: false,
        external_ids: {
          isrc: "JPJ221000176",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0YAMQSmHk6BSUGTYpaoqTJ",
        },
        href: "https://api.spotify.com/v1/tracks/0YAMQSmHk6BSUGTYpaoqTJ",
        id: "0YAMQSmHk6BSUGTYpaoqTJ",
        is_local: false,
        is_playable: true,
        name: "Wherever you are",
        popularity: 60,
        preview_url:
          "https://p.scdn.co/mp3-preview/47b9e067fea8388e5b5c4ce90a48695637beb2a7?cid=a586bb04ed92463d870267ff64b9ce6f",
        track_number: 9,
        type: "track",
        uri: "spotify:track:0YAMQSmHk6BSUGTYpaoqTJ",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/6yhD1KjhLxIETFF7vIRf8B",
              },
              href: "https://api.spotify.com/v1/artists/6yhD1KjhLxIETFF7vIRf8B",
              id: "6yhD1KjhLxIETFF7vIRf8B",
              name: "Against The Current",
              type: "artist",
              uri: "spotify:artist:6yhD1KjhLxIETFF7vIRf8B",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/6ra1YQgvi8R5TZrCjRzKQY",
          },
          href: "https://api.spotify.com/v1/albums/6ra1YQgvi8R5TZrCjRzKQY",
          id: "6ra1YQgvi8R5TZrCjRzKQY",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273544286131f617b61329a3be4",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02544286131f617b61329a3be4",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851544286131f617b61329a3be4",
              width: 64,
            },
          ],
          name: "Gravity (The Acoustic Sessions Volume II)",
          release_date: "2015-07-10",
          release_date_precision: "day",
          total_tracks: 6,
          type: "album",
          uri: "spotify:album:6ra1YQgvi8R5TZrCjRzKQY",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6yhD1KjhLxIETFF7vIRf8B",
            },
            href: "https://api.spotify.com/v1/artists/6yhD1KjhLxIETFF7vIRf8B",
            id: "6yhD1KjhLxIETFF7vIRf8B",
            name: "Against The Current",
            type: "artist",
            uri: "spotify:artist:6yhD1KjhLxIETFF7vIRf8B",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3xYFPpQA4Hp8BTusV6um2e",
            },
            href: "https://api.spotify.com/v1/artists/3xYFPpQA4Hp8BTusV6um2e",
            id: "3xYFPpQA4Hp8BTusV6um2e",
            name: "Taka",
            type: "artist",
            uri: "spotify:artist:3xYFPpQA4Hp8BTusV6um2e",
          },
        ],
        disc_number: 1,
        duration_ms: 174000,
        explicit: false,
        external_ids: {
          isrc: "GBDMT1500220",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0RWrqrNxUC2v1OGbbvJAHB",
        },
        href: "https://api.spotify.com/v1/tracks/0RWrqrNxUC2v1OGbbvJAHB",
        id: "0RWrqrNxUC2v1OGbbvJAHB",
        is_local: false,
        is_playable: true,
        name: "Dreaming Alone - Acoustic",
        popularity: 33,
        preview_url:
          "https://p.scdn.co/mp3-preview/4630d74f01eb6548f58b4dbae7957786ccae9575?cid=a586bb04ed92463d870267ff64b9ce6f",
        track_number: 3,
        type: "track",
        uri: "spotify:track:0RWrqrNxUC2v1OGbbvJAHB",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
              },
              href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
              id: "7k73EtZwoPs516ZxE72KsO",
              name: "ONE OK ROCK",
              type: "artist",
              uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5yyxuxoqWqmYIJcORvvnpL",
          },
          href: "https://api.spotify.com/v1/albums/5yyxuxoqWqmYIJcORvvnpL",
          id: "5yyxuxoqWqmYIJcORvvnpL",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2731cb3ecc128ec5c3cae0fbbe1",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e021cb3ecc128ec5c3cae0fbbe1",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048511cb3ecc128ec5c3cae0fbbe1",
              width: 64,
            },
          ],
          name: "35xxxv (Deluxe Edition)",
          release_date: "2015-09-25",
          release_date_precision: "day",
          total_tracks: 15,
          type: "album",
          uri: "spotify:album:5yyxuxoqWqmYIJcORvvnpL",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
            },
            href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
            id: "7k73EtZwoPs516ZxE72KsO",
            name: "ONE OK ROCK",
            type: "artist",
            uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
          },
        ],
        disc_number: 1,
        duration_ms: 265213,
        explicit: false,
        external_ids: {
          isrc: "USWB11507717",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/0OwEskGUqCMgkSY7JkJS7x",
        },
        href: "https://api.spotify.com/v1/tracks/0OwEskGUqCMgkSY7JkJS7x",
        id: "0OwEskGUqCMgkSY7JkJS7x",
        is_local: false,
        is_playable: true,
        name: "Heartache",
        popularity: 56,
        preview_url:
          "https://p.scdn.co/mp3-preview/148a17d21d1ba549abfaf678a8622598db656c44?cid=a586bb04ed92463d870267ff64b9ce6f",
        track_number: 6,
        type: "track",
        uri: "spotify:track:0OwEskGUqCMgkSY7JkJS7x",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
              },
              href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
              id: "7k73EtZwoPs516ZxE72KsO",
              name: "ONE OK ROCK",
              type: "artist",
              uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5dWke9BKYdBq7YXbb7jrLC",
          },
          href: "https://api.spotify.com/v1/albums/5dWke9BKYdBq7YXbb7jrLC",
          id: "5dWke9BKYdBq7YXbb7jrLC",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273cff66b3375bbeb03c6c214a0",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02cff66b3375bbeb03c6c214a0",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851cff66b3375bbeb03c6c214a0",
              width: 64,
            },
          ],
          name: "JINSEI KAKETE BOKU WA",
          release_date: "2013-03-06",
          release_date_precision: "day",
          total_tracks: 13,
          type: "album",
          uri: "spotify:album:5dWke9BKYdBq7YXbb7jrLC",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
            },
            href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
            id: "7k73EtZwoPs516ZxE72KsO",
            name: "ONE OK ROCK",
            type: "artist",
            uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
          },
        ],
        disc_number: 1,
        duration_ms: 292733,
        explicit: false,
        external_ids: {
          isrc: "JPJ221200345",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4f3nDjgqXurMryYBSp0TZD",
        },
        href: "https://api.spotify.com/v1/tracks/4f3nDjgqXurMryYBSp0TZD",
        id: "4f3nDjgqXurMryYBSp0TZD",
        is_local: false,
        is_playable: true,
        name: "The Beginning",
        popularity: 60,
        preview_url:
          "https://p.scdn.co/mp3-preview/3643c411075406dd0f708150ef7cbf4528fbd5ac?cid=a586bb04ed92463d870267ff64b9ce6f",
        track_number: 4,
        type: "track",
        uri: "spotify:track:4f3nDjgqXurMryYBSp0TZD",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
              },
              href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
              id: "7k73EtZwoPs516ZxE72KsO",
              name: "ONE OK ROCK",
              type: "artist",
              uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/1obI3635eoYwWYhGs2vEeP",
          },
          href: "https://api.spotify.com/v1/albums/1obI3635eoYwWYhGs2vEeP",
          id: "1obI3635eoYwWYhGs2vEeP",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273794179deeade79ef08eabd94",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02794179deeade79ef08eabd94",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851794179deeade79ef08eabd94",
              width: 64,
            },
          ],
          name: "Eye of the Storm",
          release_date: "2019-02-15",
          release_date_precision: "day",
          total_tracks: 13,
          type: "album",
          uri: "spotify:album:1obI3635eoYwWYhGs2vEeP",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
            },
            href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
            id: "7k73EtZwoPs516ZxE72KsO",
            name: "ONE OK ROCK",
            type: "artist",
            uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
          },
        ],
        disc_number: 1,
        duration_ms: 214573,
        explicit: false,
        external_ids: {
          isrc: "USAT21811964",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4zXRMjTaeflesB3Ih4eHnJ",
        },
        href: "https://api.spotify.com/v1/tracks/4zXRMjTaeflesB3Ih4eHnJ",
        id: "4zXRMjTaeflesB3Ih4eHnJ",
        is_local: false,
        is_playable: true,
        name: "Stand Out Fit In",
        popularity: 61,
        preview_url:
          "https://p.scdn.co/mp3-preview/1b40f08335152598292c166100e03965c8d1589f?cid=a586bb04ed92463d870267ff64b9ce6f",
        track_number: 2,
        type: "track",
        uri: "spotify:track:4zXRMjTaeflesB3Ih4eHnJ",
      },
      {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
              },
              href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
              id: "7k73EtZwoPs516ZxE72KsO",
              name: "ONE OK ROCK",
              type: "artist",
              uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/2YXEcU1J4p8HyIVatFFmng",
          },
          href: "https://api.spotify.com/v1/albums/2YXEcU1J4p8HyIVatFFmng",
          id: "2YXEcU1J4p8HyIVatFFmng",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2737af74715d7d687a49b8cefeb",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e027af74715d7d687a49b8cefeb",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048517af74715d7d687a49b8cefeb",
              width: 64,
            },
          ],
          name: "Renegades",
          release_date: "2021-04-16",
          release_date_precision: "day",
          total_tracks: 2,
          type: "album",
          uri: "spotify:album:2YXEcU1J4p8HyIVatFFmng",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
            },
            href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
            id: "7k73EtZwoPs516ZxE72KsO",
            name: "ONE OK ROCK",
            type: "artist",
            uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
          },
        ],
        disc_number: 1,
        duration_ms: 244538,
        explicit: false,
        external_ids: {
          isrc: "USAT22101175",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/29VVYrV5TVpGu0IfoTXlcw",
        },
        href: "https://api.spotify.com/v1/tracks/29VVYrV5TVpGu0IfoTXlcw",
        id: "29VVYrV5TVpGu0IfoTXlcw",
        is_local: false,
        is_playable: true,
        name: "Renegades",
        popularity: 57,
        preview_url:
          "https://p.scdn.co/mp3-preview/a9c7b3356a1981ab3be074768690a79576f85b3f?cid=a586bb04ed92463d870267ff64b9ce6f",
        track_number: 1,
        type: "track",
        uri: "spotify:track:29VVYrV5TVpGu0IfoTXlcw",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
              },
              href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
              id: "7k73EtZwoPs516ZxE72KsO",
              name: "ONE OK ROCK",
              type: "artist",
              uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/5dWke9BKYdBq7YXbb7jrLC",
          },
          href: "https://api.spotify.com/v1/albums/5dWke9BKYdBq7YXbb7jrLC",
          id: "5dWke9BKYdBq7YXbb7jrLC",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273cff66b3375bbeb03c6c214a0",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02cff66b3375bbeb03c6c214a0",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851cff66b3375bbeb03c6c214a0",
              width: 64,
            },
          ],
          name: "JINSEI KAKETE BOKU WA",
          release_date: "2013-03-06",
          release_date_precision: "day",
          total_tracks: 13,
          type: "album",
          uri: "spotify:album:5dWke9BKYdBq7YXbb7jrLC",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
            },
            href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
            id: "7k73EtZwoPs516ZxE72KsO",
            name: "ONE OK ROCK",
            type: "artist",
            uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
          },
        ],
        disc_number: 1,
        duration_ms: 235346,
        explicit: false,
        external_ids: {
          isrc: "JPJ221200410",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/30CenAPBR2VmH91r4Um32b",
        },
        href: "https://api.spotify.com/v1/tracks/30CenAPBR2VmH91r4Um32b",
        id: "30CenAPBR2VmH91r4Um32b",
        is_local: false,
        is_playable: true,
        name: "Clock Strikes",
        popularity: 55,
        preview_url:
          "https://p.scdn.co/mp3-preview/bb9dbbb14f106c313c82249235ab29ebbf0eb38e?cid=a586bb04ed92463d870267ff64b9ce6f",
        track_number: 5,
        type: "track",
        uri: "spotify:track:30CenAPBR2VmH91r4Um32b",
      },
      {
        album: {
          album_type: "album",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
              },
              href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
              id: "7k73EtZwoPs516ZxE72KsO",
              name: "ONE OK ROCK",
              type: "artist",
              uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
            },
          ],
          external_urls: {
            spotify: "https://open.spotify.com/album/0p1YL9nzIuKTonZH6Gq58i",
          },
          href: "https://api.spotify.com/v1/albums/0p1YL9nzIuKTonZH6Gq58i",
          id: "0p1YL9nzIuKTonZH6Gq58i",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2730f94f53a1c9c60d953ffd2f2",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e020f94f53a1c9c60d953ffd2f2",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048510f94f53a1c9c60d953ffd2f2",
              width: 64,
            },
          ],
          name: "Ambitions",
          release_date: "2017-01-13",
          release_date_precision: "day",
          total_tracks: 14,
          type: "album",
          uri: "spotify:album:0p1YL9nzIuKTonZH6Gq58i",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO",
            },
            href: "https://api.spotify.com/v1/artists/7k73EtZwoPs516ZxE72KsO",
            id: "7k73EtZwoPs516ZxE72KsO",
            name: "ONE OK ROCK",
            type: "artist",
            uri: "spotify:artist:7k73EtZwoPs516ZxE72KsO",
          },
        ],
        disc_number: 1,
        duration_ms: 255400,
        explicit: false,
        external_ids: {
          isrc: "USAT21603322",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/57sk9X1fPLXRfkw74XNrmK",
        },
        href: "https://api.spotify.com/v1/tracks/57sk9X1fPLXRfkw74XNrmK",
        id: "57sk9X1fPLXRfkw74XNrmK",
        is_local: false,
        is_playable: true,
        name: "We Are",
        popularity: 58,
        preview_url:
          "https://p.scdn.co/mp3-preview/b99cb696281d7d77f08aacdf750b18935f2e52dd?cid=a586bb04ed92463d870267ff64b9ce6f",
        track_number: 4,
        type: "track",
        uri: "spotify:track:57sk9X1fPLXRfkw74XNrmK",
      },
    ],
    limit: 8,
    next: "https://api.spotify.com/v1/search?query=one+ok+rock&type=track&market=ID&locale=en-US%2Cen%3Bq%3D0.9&offset=8&limit=8",
    offset: 0,
    previous: null,
    total: 562,
  },
};

export default playlistResponse;
