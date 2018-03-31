# State Structure - Rough Design

```
{
  session: {
    currentUser: {
      id: 1,
      username: "alpha"
    }
  },

  ads: [
    ad_id1: {
      video_url: ...,
      total_airings: X,
      networks: X,
      shows: X,
      estimated_spend: X,
      share_of_voice: X,
      brand_id: X,
      brand_name: '',
      category_id: X
      category_name: ''
      },
    ad_id2: { ... },
    ...,
    ad_idn: { ... }
  ],

  categories: {
    ...
  },

  brands: [
    brand_id1: {
      name: '',
      category_id: '',

    },
    brand_id2: { ... },
    ...,
    brand_idn: { ... }
  ],,

  modal: {

  },

  visualization: {
    [ vis1: {},
      vis2: {},
      visn: {}
    ]
  },

}

```


**_Note_** - _Visualization data does not potentially have to be stored in state. Could be stored locally. Further Qs: Caching? _
