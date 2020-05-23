var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "600", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "#3a4e93",
    state_hover_color: "#a2b4ef",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "circle",
    location_image_source: "frog.png",
    location_display: "state",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    link_text: "View Website",
    location_image_url: "",
    state_image_url: "",
    state_image_position: ""
  },
  state_specific: {
    HI: {
      url: "/organizations/state-foi-resource/hawaii-foi-resources",
      description: " ",
      name: "Hawaii"
    },
    AK: {
      url: "/organizations/state-foi-resource/alaska-foi-resources",
      name: "Alaska",
      zoomable: "no",
      description: " "
    },
    FL: {
      url: "/organizations/state-foi-resource/florida-foi-resources",
      inactive: "no",
      name: "Florida",
      description: " ",
      zoomable: "yes"
    },
    NH: {
      url: "/organizations/state-foi-resource/new-hampshire-foi-resources",
      name: "New Hampshire",
      zoomable: "no",
      description: " "
    },
    VT: {
      url: "/organizations/state-foi-resource/vermont-foi-resources",
      name: "Vermont",
      zoomable: "no",
      description: " "
    },
    ME: {
      url: "/organizations/state-foi-resource/maine-foi-resources",
      name: "Maine",
      description: " "
    },
    RI: {
      url: "/organizations/state-foi-resource/rhode-island-foi-resources",
      name: "Rhode Island",
      zoomable: "yes",
      description: " "
    },
    NY: {
      url: "/organizations/state-foi-resource/new-york-foi-resources",
      name: "New York",
      description: " "
    },
    PA: {
      url: "/organizations/state-foi-resource/pennsylvania-foi-resources",
      name: "Pennsylvania",
      description: " "
    },
    NJ: {
      url: "/organizations/state-foi-resource/new-jersey-foi-resources",
      name: "New Jersey",
      description: " "
    },
    DE: {
      url: "/organizations/state-foi-resource/delaware-foi-resources",
      name: "Delaware",
      description: " ",
      zoomable: "yes"
    },
    MD: {
      url: "/organizations/state-foi-resource/maryland-foi-resources",
      name: "Maryland",
      description: " "
    },
    VA: {
      url: "/organizations/state-foi-resource/virginia-foi-resources",
      name: "Virginia",
      description: " "
    },
    WV: {
      url: "/organizations/state-foi-resource/west-virginia-foi-resources",
      name: "West Virginia",
      description: " "
    },
    OH: {
      url: "/organizations/state-foi-resource/ohio-foi-resources",
      name: "Ohio",
      description: " "
    },
    IN: {
      url: "/organizations/state-foi-resource/indiana-foi-resources",
      name: "Indiana",
      description: " "
    },
    IL: {
      url: "/organizations/state-foi-resource/illinois-foi-resources",
      name: "Illinois",
      description: " "
    },
    CT: {
      url: "/organizations/state-foi-resource/connecticut-foi-resources",
      name: "Connecticut",
      description: " ",
      zoomable: "yes"
    },
    WI: {
      url: "/organizations/state-foi-resource/wisconsin-foi-resources",
      name: "Wisconsin",
      description: " "
    },
    NC: {
      url: "/organizations/state-foi-resource/north-carolina-foi-resources",
      name: "North Carolina",
      description: " "
    },
    DC: {
      url: "/organizations/state-foi-resource/district-columbia-foi-resources",
      name: "District of Columbia",
      description: " ",
      zoomable: "yes"
    },
    MA: {
      url: "/organizations/state-foi-resource/massachusetts-foi-resources",
      name: "Massachusetts",
      description: " "
    },
    TN: {
      url: "/organizations/state-foi-resource/tennessee-foi-resources",
      name: "Tennessee",
      description: " "
    },
    AR: {
      url: "/organizations/state-foi-resource/arkansas-foi-resources",
      name: "Arkansas",
      zoomable: "no",
      description: " "
    },
    MO: {
      url: "/organizations/state-foi-resource/missouri-foi-resources",
      name: "Missouri",
      description: " "
    },
    GA: {
      url: "/organizations/state-foi-resource/georgia-foi-resources",
      name: "Georgia",
      description: " ",
      zoomable: "yes"
    },
    SC: {
      url: "/organizations/state-foi-resource/south-carolina-foi-resources",
      name: "South Carolina",
      description: " "
    },
    KY: {
      url: "/organizations/state-foi-resource/kentucky-foi-resources",
      name: "Kentucky",
      description: " "
    },
    AL: {
      url: "/organizations/state-foi-resource/alabama-foi-resources",
      name: "Alabama",
      zoomable: "yes",
      description: " "
    },
    LA: {
      url: "/organizations/state-foi-resource/louisiana-foi-resources",
      name: "Louisiana",
      description: " "
    },
    MS: {
      url: "/organizations/state-foi-resource/mississippi-foi-resources",
      name: "Mississippi",
      description: " "
    },
    IA: {
      url: "/organizations/state-foi-resource/iowa-foi-resources",
      name: "Iowa",
      description: " "
    },
    MN: {
      url: "/organizations/state-foi-resource/minnesota-foi-resources",
      name: "Minnesota",
      description: " "
    },
    OK: {
      url: "/organizations/state-foi-resource/oklahoma-foi-resources",
      name: "Oklahoma",
      description: " "
    },
    TX: {
      url: "/organizations/state-foi-resource/texas-foi-resources",
      name: "Texas",
      description: " "
    },
    NM: {
      url: "/organizations/state-foi-resource/new-mexico-foi-resources",
      name: "New Mexico",
      description: " "
    },
    KS: {
      url: "/organizations/state-foi-resource/kansas-foi-resources",
      name: "Kansas",
      description: " "
    },
    NE: {
      url: "/organizations/state-foi-resource/nebraska-foi-resources",
      name: "Nebraska",
      description: " "
    },
    SD: {
      url: "/organizations/state-foi-resource/south-dakota-foi-resources",
      name: "South Dakota",
      zoomable: "no",
      description: " "
    },
    ND: {
      url: "/organizations/state-foi-resource/north-dakota-foi-resources",
      name: "North Dakota",
      zoomable: "no",
      description: " "
    },
    WY: {
      url: "/organizations/state-foi-resource/wyoming-foi-resources",
      name: "Wyoming",
      description: " "
    },
    MT: {
      url: "/organizations/state-foi-resource/montana-foi-resources",
      name: "Montana",
      description: " "
    },
    CO: {
      url: "/organizations/state-foi-resource/colorado-foi-resources",
      name: "Colorado",
      description: " ",
      zoomable: "yes"
    },
    UT: {
      url: "/organizations/state-foi-resource/utah-foi-resources",
      name: "Utah",
      description: " "
    },
    AZ: {
      url: "/organizations/state-foi-resource/arizona-foi-resources",
      name: "Arizona",
      description: " ",
      zoomable: "yes"
    },
    NV: {
      url: "/organizations/state-foi-resource/nevada-foi-resources",
      name: "Nevada",
      zoomable: "yes",
      description: " "
    },
    OR: {
      url: "/organizations/state-foi-resource/oregon-foi-resources",
      name: "Oregon",
      description: " "
    },
    WA: {
      url: "/organizations/state-foi-resource/washington-foi-resources",
      name: "Washington",
      description: " "
    },
    CA: {
      url: "/organizations/state-foi-resource/california-foi-resources",
      name: "California",
      description: " ",
      zoomable: "yes"
    },
    MI: {
      url: "/organizations/state-foi-resource/michigan-foi-resources",
      name: "Michigan",
      description: " "
    },
    ID: {
      url: "/organizations/state-foi-resource/idaho-foi-resources",
      name: "Idaho",
      description: " "
    },
    GU: {
      hide: "yes",
      name: "Guam",
      description: " "
    },
    VI: {
      hide: "yes",
      name: "Virgin Islands",
      description: " "
    },
    PR: {
      hide: "yes",
      name: "Puerto Rico",
      description: " "
    },
    MP: {
      hide: "yes",
      name: "Northern Mariana Islands",
      description: " "
    },
    AS: {
      hide: "yes",
      name: "American Samoa",
      description: " "
    }
  },
  locations: {
    "0": {
      lat: "40.705110",
      lng: "-73.621696",
      name: "New York City",
      description: "Reinvent Albany<br />Email:\ninfo@reinventalbany.org",
      url: "/organizations/reinvent-albany"
    },
    "1": {
      name: "Anchorage",
      lat: 61.2180556,
      lng: -149.9002778
    },
    "2": {
      lat: "30.4383",
      lng: "-84.2807",
      name: "Tallahassee",
      description: "Florida First Amendment Foundation <br />Email: info@floridafaf.org",
      url: "/organizations/florida-first-amendment-foundation"
    },
    "3": {
      lat: "29.678831",
      lng: "-82.345878",
      name: "Gainesville",
      description: "Brechner Center for Freedom of Information<br /> Email: schance@jou.ufl.edu",
      url: "/organizations/brechner-center-freedom-information"
    },
    "4": {
      lat: "33.7748",
      lng: "-84.2963",
      name: "Decatur",
      description: "Georgia First Amendment Foundation<br />Email: info@gfaf.org",
      url: "/organizations/georgia-first-amendment-foundation"
    },
    "5": {
      lat: 36.159,
      lng: -86.783,
      name: "Nashville",
      description: "Tennessee Coalition for Open Government<br />Email: fisher@tcog.info",
      url: "/organizations/tennessee-coalition-open-government"
    },
    "6": {
      lat: "35.649073",
      lng: "-97.477462",
      name: "Edmond",
      url: "/organizations/foi-oklahoma-inc",
      description: "FOI Oklahoma<br />Email: kaybickham@cox.net"
    },
    "7": {
      lat: 38.949,
      lng: -92.328,
      name: "Columbia",
      description: "Missouri Sunshine Coalition<br />Email: grovesprof@gmail.com",
      url: "/organizations/missouri-sunshine-coalition"
    },
    "8": {
      lat: 47.813,
      lng: -112.186,
      name: "Choteau",
      description: "Montana Freedom of Information Hotline<br />Email: acantha@3rivers.net",
      url: "/organizations/montana-freedom-information-hotline-inc"
    },
    "9": {
      lat: "42.360",
      lng: "-71.058",
      name: "Boston",
      description: "New England First Amendment Coalition<br />Email: mail@nefirstamendment.org",
      url: "/organizations/new-england-first-amendment-coalition"
    },
    "10": {
      lat: 40.35,
      lng: -74.438,
      name: "Jamesburg",
      description: "New Jersey Foundation for Open Government<br />Email: info@njfog.org",
      url: "/organizations/new-jersey-foundation-open-government"
    },
    "11": {
      lat: 35.093,
      lng: -106.643,
      name: "Albuquerque",
      description: "New Mexico Foundation for Open Government<br />Email: info@nmfog.org",
      url: "/organizations/new-mexico-foundation-open-government-nmfog"
    },
    "12": {
      lat: 36.103,
      lng: -79.503,
      name: "Elon",
      description: "North Carolina Open Government Coalition<br />Email: ncopengov@elon.edu",
      url: "/organizations/north-carolina-open-government-coalition"
    },
    "13": {
      lat: 39.98,
      lng: -83.063,
      name: "Columbus",
      description: "Ohio Coalition for Open Government<br />Email: dhetzel@ohionews.org",
      url: "/organizations/ohio-coalition-open-government"
    },
    "14": {
      lat: 45.454,
      lng: -123.846,
      name: "Tillamook",
      description: "Open Oregon<br />Email: lisaphipps08@gmail.com",
      url: "/organizations/open-oregon-freedom-information-coalition"
    },
    "15": {
      lat: 40.335,
      lng: -76.837,
      name: "Harrisburg",
      description: "Pennsylvania Freedom of Information Coalition<br />Email: info@pafoic.org",
      url: "/organizations/pennsylvania-freedom-information-coalition"
    },
    "16": {
      lat: 34.032,
      lng: -81.125,
      name: "Columbia",
      description: "South Carolina Press Association FOI Committee<br />Email: whiting@indexjournal.com",
      url: "/organizations/south-carolina-press-association-foi-committee"
    },
    "17": {
      lat: "39.768",
      lng: "-86.158",
      name: "Indianapolis",
      description: "Indiana Coalition for Open Government<br />Email: zachary.baiel@gmail.com",
      url: "/organizations/indiana-coalition-for-open-government"
    },
    "18": {
      lat: 37.275,
      lng: -76.708,
      name: "Williamsburg",
      description: "Virginia Coalition for Open Government<br />Email: mrhyne@opengovva.org",
      url: "/organizations/virginia-coalition-open-government"
    },
    "20": {
      lat: "43.073",
      lng: "-89.401",
      name: "Madison",
      description: "Wisconsin Freedom of Information Council<br />Email: blueders@gmail.com",
      url: "/organizations/wisconsin-freedom-information-council"
    },
    "21": {
      lat: 38.605,
      lng: -121.338,
      name: "Carmichael",
      description: "Californians Aware<br />Email: terry@calaware.org",
      url: "/organizations/californians-aware"
    },
    "22": {
      lat: 39.734,
      lng: -104.986,
      name: "Denver",
      description: "Colorado Freedom of Information Coalition<br />Email: jroberts@coloradofoic.org",
      url: "/organizations/colorado-freedom-information-coalition-nfoic-affiliate"
    },
    "23": {
      lat: 41.691,
      lng: -72.585,
      name: "Glastonbury",
      description: "Connecticut Foundation for Open Government",
      url: "/organizations/connecticut-foundation-open-government-nfoic-affiliate"
    },
    "24": {
      lat: 38.917,
      lng: -77.032,
      name: "Washington DC",
      description: "D.C. Open Government Coalition<br />Email: saideh.ezzatebaghani@dcogc.org",
      url: "/organizations/dc-open-government-coalition"
    },
    "25": {
      lat: 39.771,
      lng: -75.58,
      name: "Montchanin",
      description: "Delaware Coalition for Open Government <br />Email: jdf0000@aol.com",
      url: "/organizations/delaware-coalition-open-government-nfoic-affiliate"
    },
    "26": {
      lat: 33.487,
      lng: -112.071,
      name: "Phoenix",
      description: "First Amendment Coalition of Arizona, Inc.<br />Email: MLoew@KPHO.com",
      url: "/organizations/first-amendment-coalition-arizona-inc"
    },
    "27": {
      lat: "39.529",
      lng: "-119.81",
      name: "Reno",
      description: "Nevada Coalition for Open Government<br />Email: pfile@unr.edu",
      url: "/organizations/state-foi-resource/nevada-foi-resources"
    },
    "28": {
      lat: 43.608,
      lng: -116.193,
      name: "Boise",
      description: "Idahoans for Openness in Government<br />Email: bzrussell@gmail.com",
      url: "/organizations/idahoans-openness-government"
    },
    "30": {
      lat: "41.480",
      lng: "-71.522",
      name: "Kingston",
      description: "Access Rhode Island<br />Email: lindalevin@uri.edu",
      url: "/organizations/state-foi-resource/rhode-island-foi-resources"
    },
    "31": {
      lat: 41.59,
      lng: -93.616,
      name: "Des Moines",
      description: "Iowa Freedom of Information Council<br />Email: IowaFOICouncil@gmail.com",
      url: "/organizations/iowa-freedom-information-council"
    },
    "32": {
      lat: 37.687,
      lng: -97.336,
      name: "Wichita",
      description: "Kansas Sunshine Coalition for Open Government<br />Email: ronkeefover@gmail.com",
      url: "/organizations/kansas-sunshine-coalition-open-government"
    },
    "33": {
      lat: "38.19507",
      lng: "-84.87869",
      name: "Frankfort",
      description: "Kentucky Open Government Coalition<br />Email: missbhaver@gmail.com",
      url: "/organizations/kentucky-open-government-coalition"
    },
    "34": {
      lat: 44.318,
      lng: -69.776,
      name: "Augusta",
      description: "Maine Freedom of Information Coalition<br />Email: mfoic@earthlink.net",
      url: "/organizations/maine-freedom-information-coalition"
    },
    "36": {
      lat: 42.646,
      lng: -84.648,
      name: "Dimondale",
      description: "Michigan Coalition for Open Government<br />Email: info@miopengov.org",
      url: "/organizations/michigan-coalition-open-government"
    },
    "39": {
      lat: 30.443,
      lng: -91.187,
      name: "Baton Rouge",
      url: "/organizations/public-affairs-research-council-louisiana-par",
      description: "Public Affairs Research Council of Louisiana<br />robertscott@parlouisiana.org"
    },
    "40": {
      lat: 47.604,
      lng: -122.329,
      name: "Seattle",
      description: "Public Affairs Research Council of Louisiana<br />Email: info@washingtoncog.org",
      url: "/organizations/washington-coalition-open-government"
    },
    "41": {
      lat: 30.29,
      lng: -97.745,
      name: "Austin",
      description: "Freedom of Information Foundation of Texas, Inc.<br />Email:\nkelley.shannon@foift.org",
      url: "/organizations/freedom-information-foundation-texas-inc"
    },
    "44": {
      lat: "32.379",
      lng: "-86.307",
      name: "Montgomery",
      description: "Alabama Sunlight Coalition Council<br />Email: shay.farley@splcenter.org",
      url: "/organizations/state-foi-resource/alabama-foi-resources"
    }
  },
  labels: {
    HI: {
      font_family: "default",
      pill: "yes",
      width: "default"
    }
  },
  regions: {},
  data: {
    data: {}
  }
};