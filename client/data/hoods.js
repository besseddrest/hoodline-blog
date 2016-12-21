const hoods = [
  {
    "name": "Alamo Square",
    "path": "alamo-square",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/10/nlp-map--alamosquare.png",
    "shortDesc": "A POSTCARD-PERFECT ENCLAVE WITH A KILLER VIEW",
    "longDesc": "Known for its historic homes (including the iconic Painted Ladies) and its sweeping views of downtown, Alamo Square draws picnickers, dog owners, tennis players, and those seeking a touch of nature and history just steps from the busy Divisadero corridor."
  },
  {
    "name": "Bayview",
    "path": "bayview",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/29/nlp-map--bayview.png",
    "shortDesc": "THE CITYS DIVERSE INDUSTRIAL CENTER",
    "longDesc": "SFs southeast corner is home to its largest African-American community, and while poverty and crime continue to be a struggle, artisans, manufacturers, horticulturalists, artists and others seeking space, sun and views have helped forge a tight-knit local scene near the seaport."
  },
  {
    "name": "Bernal Heights",
    "path": "bernal-heights",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/65/nlp-map--bernalheights.png",
    "shortDesc": "A TIGHT-KNIT HILLTOP VILLAGE",
    "longDesc": "Atop a large hill just south of the Mission, Bernal Heights offers 360-degree views, some of the steepest streets in the city, and homes dating from all eras. Its hub, Cortland Avenue, boasts a selection of unique cafes and shops that emphasize Bernals family-friendly feel."
  },
  {
    "name": "Castro",
    "path": "castro",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/8/nlp-map--castro.png",
    "shortDesc": "SAN FRANCISCOS GAYBORHOOD IS A LONGTIME BEACON OF DIVERSITY",
    "longDesc": "Generations of activists made the Castro a global epicenter for LGBTQ rights, and its now home to a vibrant community that welcomes all genders and sexualities. Vibrant nightlife, boutiques, and historic homes draw both locals and tourists to one of the worlds great gayborhoods."
  },
  {
    "name": "Chinatown",
    "path": "chinatown",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/28/nlp-map--chinatown.png",
    "shortDesc": "CHINESE TRADITION IN A 21ST-CENTURY KEY",
    "longDesc": "The largest Chinatown outside of Asia, this densely populated neighborhood is known for its unique architecture, colorful tourist shops, and affordable eateries. Many residents still struggle with poverty and overcrowding, but the community is vibrant, with an arts scene on the rise."
  },
  {
    "name": "Civic Center",
    "path": "civic-center",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/17/nlp-map--civiccenter.png",
    "shortDesc": "WHERE CITY GOVERNMENT, HIGH CULTURE, AND PUBLIC SPACE INTERSECT",
    "longDesc": "A longtime center for city offices, cultural institutions like the symphony and ballet, and numerous nonprofits, Civic Center still faces issues of homelessness and crime. But it's increasingly growing its scope with a new influx of tech offices, condo towers, and bars and restaurants."
  },
  {
    "name": "Citywide",
    "path": "citywide",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/17/nlp-map--civiccenter.png",
    "shortDesc": "Proin commodo nibh dapibus suscipit ullamcorper.",
    "longDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pulvinar ligula. Suspendisse feugiat mi vehicula, posuere erat vitae, lobortis lectus. In placerat iaculis turpis. Aliquam commodo malesuada nisl at pellentesque. Pellentesque id metus justo. Nunc sed justo est. Pellentesque scelerisque enim mi, quis tincidunt felis consequat a."
  },
  {
    "name": "Cole Valley",
    "path": "cole-valley",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/14/nlp-map--colevalley.png",
    "shortDesc": "THE HAIGHT'S AFFLUENT, FAMILY-FRIENDLY SIBLING",
    "longDesc": "Once an extension of the Upper Haight, Cole Valley today has more children, Teslas and wine shops than its bohemian neighbor. In the evenings, residents of its many Victorian homes are likely to jog through Golden Gate Park, hit a yoga class, or walk the dog before dining out."
  },
  {
    "name": "Cow Hollow",
    "path": "cow-hollow",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/74/nlp-map--cowhollow.png",
    "shortDesc": "A CHIC ENCLAVE FOR THE YOUNG AND WELL-HEELED",
    "longDesc": "Sometimes described as a younger Pac Heights or a more relaxed Marina, Cow Hollow's attractive Victorians and thriving commercial Union Street commercial strip make it a beacon for singles, young families and affluent denizens of all stripes."
  },
  {
    "name": "Divisadero",
    "path": "divisadero",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/5/nlp-map--divisadero.png",
    "shortDesc": "Brunch tousled banjo af stumptown neutra migas, coloring book forage",
    "longDesc": "Intelligentsia squid lomo kitsch shabby chic tacos wayfarers. Af sriracha organic occupy, disrupt crucifix quinoa pok pok slow-carb meh humblebrag. Echo park bushwick meditation, street art pop-up kombucha ethical activated charcoal trust fund portland next level literally."
  },
  {
    "name": "Dogpatch",
    "path": "dogpatch",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/30/nlp-map--dogpatch.png",
    "shortDesc": "AN INDUSTRIAL HISTORY, A FAST-GROWING FUTURE",
    "longDesc": "A former manufacturing hub, the sunny Dogpatch is still home to numerous light-industrial businesses, but it's been heavily redeveloped for residential use in recent years, with a spate of new mixed-use lofts that draw artisans, restaurants, and a happening maker scene."
  },
  {
    "name": "Duboce Triangle",
    "path": "duboce-triangle",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/6/nlp-map--dubocetriangle.png",
    "shortDesc": "A LEAFY RESIDENTIAL ENCLAVE IN THE CITY CENTER",
    "longDesc": "Geographically situated between the Castro, the Mission, and the Lower Haight, Duboce Triangle offers convenient access to its namesake park, transit and other urban conveniences. The neighborhood has recently seen a big boom in development, particularly new residential buildings along Market Street."
  },
  {
    "name": "Embarcadero",
    "path": "embarcadero",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/22/nlp-map--embarcadero.png",
    "shortDesc": "Aliquam euismod vulputate mi eu molestie.",
    "longDesc": "Nunc quis magna vel lectus tempor tristique vitae quis nisl. Suspendisse potenti. Donec finibus non ligula vitae tristique. In vitae efficitur tellus. Aliquam in vestibulum purus. Vestibulum vitae nulla non magna interdum eleifend. Sed eget mauris faucibus, blandit urna a, pharetra erat."
  },
  {
    "name": "Excelsior",
    "path": "excelsior",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/50/nlp-map--excelsior.png",
    "shortDesc": "BAYWIDE VIEWS AND AFFORDABLE LIVING ON THE CITY'S SOUTHERNMOST HILL",
    "longDesc": "Single-family homes, local businesses and surrounding freeways make this blue-collar neighborhood feel distinct from much of the city. Home to some of San Franciscos earliest suburbs"
  },
  {
    "name": "Fillmore",
    "path": "fillmore",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/15/nlp-map--fillmore.png",
    "shortDesc": "Duis vel magna nisi.",
    "longDesc": "Aliquam dignissim tristique odio. Quisque blandit faucibus auctor. Vestibulum egestas consequat orci, eget auctor eros semper vitae. Sed non sollicitudin sapien. Donec sed neque est. Suspendisse molestie placerat purus, et commodo diam posuere at. In pulvinar aliquet posuere. Etiam mollis tempor risus ut lobortis."
  },
  {
    "name": "Financial District",
    "path": "financial-district",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/21/nlp-map--fidi.png",
    "shortDesc": "SKYSCRAPERS AND OFFICES IN SFS HISTORIC HEART",
    "longDesc": "A longtime center for commerce, the FiDis high-rises draw big crowds of workers by day, while a smaller residential community calls it home at night. A thriving bar and restaurant scene, shopping and services largely cater to a workaday crowd, with a quieter feel on weekends, when many businesses are closed."
  },
  {
    "name": "Fishermans Wharf",
    "path": "fishermans-wharf",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/26/nlp-map--fishermanswharf.png",
    "shortDesc": "Aliquam in eros eget tortor dignissim finibus.",
    "longDesc": "Donec nec urna eget tortor consequat faucibus vitae a elit. Ut cursus, nibh in gravida convallis, ex nisi interdum nisl, sit amet accumsan urna sem eget est. Proin at nisi risus. Vivamus in quam ut arcu vehicula elementum quis a enim. Pellentesque in nisl et purus pretium imperdiet."
  },
  {
    "name": "Glen Park",
    "path": "glen-park",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/68/nlp-map--glenpark.png",
    "shortDesc": "Duis id quam eget risus lacinia scelerisque.",
    "longDesc": "Fusce sit amet aliquet felis. Curabitur lectus dui, tincidunt sit amet erat vitae, posuere aliquam libero. Phasellus eget magna leo. Sed ac nisl tortor. Duis non velit interdum, mollis orci id, imperdiet tortor. Vivamus ante diam, commodo quis fringilla consequat, fringilla sit amet neque."
  },
  {
    "name": "Hayes Valley",
    "path": "hayes-valley",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/4/nlp-map--hayesvalley.png",
    "shortDesc": "A HIP, HIGH-END HAVEN IN THE CITY CENTER",
    "longDesc": "The blocks where the Central Freeway once loomed have become a central oasis of boutiques, cafes and restaurants catering to a high-end crowd. With numerous new developments opening or in the works, Hayes Valley is an increasingly bustling village in the heart of the city."
  },
  {
    "name": "Ingleside",
    "path": "ingleside",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/39/nlp-map--ingleside.png",
    "shortDesc": "WORKING FARMLAND TRANSFORMED INTO A CITY BEAUTIFUL SUBURB",
    "longDesc": "This early residential development first attracted people from a younger San Francisco, but it's since become home to people from around the world. Though it still doesn't have much of a commercial scene to speak of, it does get livelier in the daytime, thanks to the presence of two colleges."
  },
  {
    "name": "Inner Richmond",
    "path": "inner-richmond",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/34/nlp-map--innerrichmond.png",
    "shortDesc": "A MULTICULTURAL NEIGHBORHOOD WITH VIBRANT APPEAL",
    "longDesc": "Russian grocery stores, dim sum parlors, and old-school Italian joints sit side-by-side in the Richmond's melting pot, and bustling Clement Street offers some of the city's best bars, boutiques, and bookstores. And with Golden Gate Park right nearby, Richmonders can always find a place to commune with nature."
  },
  {
    "name": "Inner Sunset",
    "path": "inner-sunset",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/13/nlp-map--innersunset.png",
    "shortDesc": "SUBURBAN LIVING IN THE HEART OF THE FOG BELT",
    "longDesc": "When streetcars first reached the Inner Sunset nearly a century ago, real estate developers made fortunes putting up prefab homes. Today, many residents actively resist development to preserve the neighborhood's closely-packed but quiet suburban feel."
  },
  {
    "name": "Jackson Square",
    "path": "jackson-square",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/24/nlp-map--jacksonsquare.png",
    "shortDesc": "",
    "longDesc": ""
  },
  {
    "name": "Japantown",
    "path": "japantown",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/35/nlp-map--japantown.png",
    "shortDesc": "",
    "longDesc": ""
  },
  {
    "name": "Lake Shore",
    "path": "lake-shore",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/36/nlp-map--lakeshore.png",
    "shortDesc": "",
    "longDesc": ""
  },
  {
    "name": "Lower Haight",
    "path": "lower-haight",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/2/nlp-map--lowerhaight.png",
    "shortDesc": "AN ARTISTIC HUB KNOWN FOR ACCESSIBILITY AND CHEAP EATS",
    "longDesc": "With its mix of vintage Victorians, hip record shops, colorful murals, and affordable restaurants, the low-key Lower Haight has attracted artists, musicians, and young professionals for decades, holding on to its laid-back vibe even amidst the city's economic boom."
  },
  {
    "name": "Lower Nob Hill",
    "path": "lower-nob-hill",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/48/nlp-map--lowernobhill.png",
    "shortDesc": "WHERE OLD-SF CHARM AND URBAN GRIT COLLIDE",
    "longDesc": "Nob Hill's historic opulence, the Tenderloin's struggles, and Union Square's tourist allure all intersect in Lower Nob Hill, where students on a budget, short-term visitors and longtime residents have made the area a hotspot for new residential, hotel, and retail development."
  },
  {
    "name": "Lower Pac Heights",
    "path": "lower-pac-heights",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/69/nlp-map--lowerpacheights.png",
    "shortDesc": "WHERE PAC HEIGHTS, THE WESTERN ADDITION, & JAPANTOWN INTERSECT",
    "longDesc": "Fillmore Street’s collection of restaurants and retail, along with Japantown, forms a bustling intersection for locals — and has since the city's early days. With three parks, proximity to the Presidio's urban forest, and plenty of live music venues, it's a lively intersection in the city's heart."
  },
  {
    "name": "Marina",
    "path": "marina",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/66/nlp-map--marina.png",
    "shortDesc": "GOOD LOOKS AND BETTER VIEWS",
    "longDesc": "Sweeping Bay views and bustling nightlife on Union and Chestnut streets make the Marina a favorite among the upwardly mobile yuppie crowd, who pack bars, boutiques and haute exercise classes between dog runs and stroller jogs along the waterfront."
  },
  {
    "name": "Mid-Market",
    "path": "mid-market",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/16/nlp-map--midmarket.png",
    "shortDesc": "",
    "longDesc": ""
  },
  {
    "name": "Mission",
    "path": "mission",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/9/nlp-map--mission.png",
    "shortDesc": "FROM SF'S FIRST NEIGHBORHOOD TO GLOBAL HOT SPOT",
    "longDesc": "Called San Francisco de Asís in the earliest days of the Spanish settlement, the Mission has played host to waves of immigrants, and is the center of the city's Latino culture. But recent years have brought an influx of wealthy newcomers and the restaurants and businesses that serve them, sometimes causing tension."
  },
  {
    "name": "Nob Hill",
    "path": "nob-hill",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/59/nlp-map--nobhill.png",
    "shortDesc": "A HISTORIC NEIGHBORHOOD WITH SWEEPING CITY VIEWS",
    "longDesc": "One of the first enclaves for San Francisco’s wealthiest, Nob Hill is bathed in history. Its luxury hotels and prime city views still dazzle, but the neighborhood also boasts more down-to-earth attractions, restaurants, and nightlife."
  },
  {
    "name": "Noe Valley",
    "path": "noe-valley",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/11/nlp-map--noevalley.png",
    "shortDesc": "A FAMILY-FILLED HILLSIDE VILLAGE",
    "longDesc": "The valley on the side of Twin Peaks is known for its numerous stroller-pushing young families, many of whom like its proximity to the freeway for tech work further south. Boutiques, fitness studios, and kid-friendly restaurants line the main drag on 24th Street, while high-end homes from all eras dot the hills above."
  },
  {
    "name": "NoPa",
    "path": "nopa",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/7/nlp-map--nopa.png",
    "shortDesc": "THE MELLOW NORTH SIDE OF THE PANHANDLE",
    "longDesc": "No matter what you call it, the area north of the Panhandle is a desirable place to reside, with mostly quiet streets, well-preserved Victorians, and a smattering of neighborhood-serving shops and eateries."
  },
  {
    "name": "North Beach",
    "path": "north-beach",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/25/nlp-map--northbeach.png",
    "shortDesc": "",
    "longDesc": ""
  },
  {
    "name": "Oakland",
    "path": "oakland",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/75/nlp--oakland.png",
    "shortDesc": "THE BRIGHT SIDE OF THE BAY",
    "longDesc": "California’s most diverse city has definitely gotten more expensive in recent years. Efforts to revitalize downtown and a steady flow of new residents have attracted new restaurants and entrepreneurs, but the city maintains hometown pride via political activism, local sports and fostering the creative arts. Text us your tips: (510) 757-9959."
  },
  {
    "name": "Ocean Beach",
    "path": "ocean-beach",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/41/nlp-map--oceanbeach.png",
    "shortDesc": "",
    "longDesc": ""
  },
  {
    "name": "Outer Richmond",
    "path": "outer-richmond",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/44/nlp-map--outerrichmond.png",
    "shortDesc": "A QUIETER CORNER OF THE OUTSIDE LANDS",
    "longDesc": "Bordered stunning coastline, the Outer Richmond's hefty proportion of single-family homes draws a diverse array of families, especially with Golden Gate Park right at its front door. Even the fog doesn't deter locals from its beautiful beaches and coastal hiking trails."
  },
  {
    "name": "Outer Sunset",
    "path": "outer-sunset",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/61/nlp-map--outersunset.png",
    "shortDesc": "BEACH-TOWN LIVING IN THE BIG CITY",
    "longDesc": "The residents of the Outer Sunset's colorful single-family homes have created a tight-knit, diverse community that thrives on the neighborhood's beachy, fogged-in vibes. It may be distant from the city center, but it has a laid-back feel you just can't find downtown, complete with surf shops, cozy cafes, and a growing gallery scene."
  },
  {
    "name": "Pacific Heights",
    "path": "pacific-heights",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/72/nlp-map--pacheights.png",
    "shortDesc": "THE CITY'S MOST AFFLUENT HILLTOP",
    "longDesc": "The gilded crest of the region for more than a century, Pacific Heights boasts monumental homes built in the formal architectural styles of numerous generations, creating an elite enclave for tech execs, politicians, sports stars, and celebrities."
  },
  {
    "name": "Polk",
    "path": "polk",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/18/nlp-map--polk.png",
    "shortDesc": "",
    "longDesc": ""
  },
  {
    "name": "Portrero Hill",
    "path": "portrero-hill",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/31/nlp-map--potrerohill.png",
    "shortDesc": "A CENTRAL CITY HILL THAT FEELS LIKE A WORLD OF ITS OWN",
    "longDesc": "Potrero Hill's steep roads, colorful rows of homes, and small-town quality feel make it popular with those who enjoy full access to the bustling city, but prefer a quiet place to lay their heads. Closer to home, there are music venues, a small retail and restaurant row, and panoramic views to enjoy."
  },
  {
    "name": "Russian Hill",
    "path": "russian-hill",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/33/nlp-map--russianhill.png",
    "shortDesc": "A HILLTOP VILLAGE IN THE MIDDLE OF EVERYTHING",
    "longDesc": "Russian Hill was originally named by settlers who discovered a Russian cemetery atop the hill; today, it's home to young professionals and families. The area attracts visitors to its famed crooked street, pedestrian lanes, and stunning vistas, and has a small but busy retail and restaurant row."
  },
  {
    "name": "SoMa",
    "path": "soma",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/19/nlp-map--soma.png",
    "shortDesc": "THE CITY'S SUPERSIZED CENTER OF INDUSTRY AND INNOVATION",
    "longDesc": "As one of the city's largest neighborhoods, SoMa plays host to a diverse array of artists' studios, apartment complexes, tech startups, auto body shops, and more. Its dozens of blocks offer world-renowned museums, restaurants, bars and nightclubs, often cheek-by-jowl with longtime businesses that reflect the neighborhood's industrial past."
  },
  {
    "name": "Telegraph Hill",
    "path": "telegraph-hill",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/27/nlp-map--telegraphhill.png",
    "shortDesc": "",
    "longDesc": ""
  },
  {
    "name": "Tenderloin",
    "path": "tenderloin",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/20/nlp-map--tenderloin.png",
    "shortDesc": "40 EDGY BLOCKS WITH A COLORFUL HISTORY",
    "longDesc": "The Tenderloin remains perhaps San Francisco's roughest neighborhood, with crime, blight, and an outsized homeless population—but it also boasts a real community of nonprofit organizations, families, artists, and activists who are proud to call it home."
  },
  {
    "name": "Twin Peaks",
    "path": "twin-peaks",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/42/nlp-map--twinpeaks.png",
    "shortDesc": "",
    "longDesc": ""
  },
  {
    "name": "Union Square",
    "path": "union-square",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/23/nlp-map--unionsquare.png",
    "shortDesc": "",
    "longDesc": ""
  },
  {
    "name": "Upper Haight",
    "path": "upper-haight",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/3/nlp-map--upperhaight.png",
    "shortDesc": "A FREE-LOVE PAST, A FREE-FORM PRESENT",
    "longDesc": "The Summer of Love may have ended 50 years ago, but tourists still flock to the Haight—a mixed blessing for locals, who appreciate the artistic vibrance and historic homes but bemoan the large transient population, rampant drug-peddling, and glut of tourist-serving businesses."
  },
  {
    "name": "West Portal",
    "path": "west-portal",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/73/nlp-map--westportal.png",
    "shortDesc": "",
    "longDesc": ""
  },
  {
    "name": "Western Addition",
    "path": "western-addition",
    "img": "https://hoodline.imgix.net/uploads/neighborhood_coverages/map/32/nlp-map--westernaddition.png",
    "shortDesc": "THE CITY'S OLDEST ANNEX IS AMONG ITS MOST DIVERSE",
    "longDesc": "Mapped out as an early addition to Gold Rush-era San Francisco, the Western Addition now covers a broad swath of the city, from trendy retail streets to housing projects and historic cultural institutions, and is convenient to the retail and nightlife of both Divisadero and the Fillmore."
  }
]

export default hoods;
