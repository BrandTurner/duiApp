const fs = require('fs')

const data = {
    "providers": [
      {
        "key": "0100201100",
        "legal_name": "Bi-Bett",
        "name": "Bi-Bett Education Program",
        "address": "22100 Princeton Street",
        "city_state_zip": "Hayward, CA 94541",
        "programs": "First Offender",
        "contact": "Josephine Ojeda",
        "phone": "(510) 783-8708",
        "fax": "(510) 783-8725",
        "email_contact": "bibetthwd@sbcglobal.net",
        "position": "37.6723461, -122.09798590000003",
        "lat": 37.6723461,
        "lng": -122.09798590000003,
        "location": {
          "lat": 37.6723461,
          "lon": -122.09798590000003
        }
      },
      {
        "key": "0100301100",
        "legal_name": "Second Chance, Inc.",
        "name": "Second Chance, Inc.",
        "address": "6330 Thornton Avenue, Suite B",
        "city_state_zip": "Newark, CA 94560",
        "mailing_address": "PO Box 643",
        "mailing_city_state_zip": "Newark, CA 94560",
        "programs": "First Offender",
        "contact": "Nora K. Rocha",
        "phone": "(510) 792-4357",
        "fax": "(510) 745-1693",
        "url": "www.secondchanceinc.com",
        "position": "37.5340554, -122.03225500000002",
        "lat": 37.5340554,
        "lng": -122.03225500000002,
        "location": {
          "lat": 37.5340554,
          "lon": -122.03225500000002
        }
      },
      {
        "key": "0100501100",
        "legal_name": "Axis Community Health, Inc.",
        "name": "Axis Community Health, Inc.",
        "address": "6666 Owens Drive",
        "city_state_zip": "Pleasanton, CA 94588",
        "programs": "First Offender",
        "contact": "Jonathan Garig",
        "phone": "(925) 462-1755",
        "fax": "(925) 485-1265",
        "url": "www.axishealth.org",
        "position": "37.697175, -121.90995529999998",
        "lat": 37.697175,
        "lng": -121.90995529999998,
        "location": {
          "lat": 37.697175,
          "lon": -121.90995529999998
        }
      },
      {
        "key": "0100601120",
        "legal_name": "MHN Government Services, Inc.",
        "name": "Occupational Health Services, Inc.",
        "address": "344 Pendleton Way",
        "city_state_zip": "Oakland, CA 94621",
        "programs": "First Offender/18 Month",
        "contact": "Victor Salinas",
        "phone": "(510) 430-3646",
        "fax": "(510) 569-3743",
        "url": "www.duiprograms.ohs.mhn.com",
        "position": "37.7359863, -122.2002764",
        "lat": 37.7359863,
        "lng": -122.2002764,
        "location": {
          "lat": 37.7359863,
          "lon": -122.2002764
        }
      },
      {
        "key": "0100602120",
        "legal_name": "MHN Government Services, Inc.",
        "name": "Occupational Health Services, Inc.",
        "address": "2847-B Whipple Road",
        "city_state_zip": "Union City, CA 94587",
        "mailing_address": "344 Pendleton Way",
        "mailing_city_state_zip": "Oakland, CA 94621",
        "programs": "First Offender/18 Month",
        "contact": "Victor Salinas",
        "phone": "(510) 430-3646",
        "fax": "(510) 569-3743",
        "url": "www.duiprograms.ohs.mhn.com",
        "position": "37.606732, -122.07053940000003",
        "lat": 37.606732,
        "lng": -122.07053940000003,
        "location": {
          "lat": 37.606732,
          "lon": -122.07053940000003
        }
      },
      {
        "key": "0100603020",
        "legal_name": "MHN Government Services, Inc.",
        "name": "Occupational Health Services, Inc.",
        "address": "7375 Amador Valley Boulevard, Suite 203",
        "city_state_zip": "Dublin, CA 94568",
        "mailing_address": "344 Pendleton Way",
        "mailing_city_state_zip": "Oakland, CA 94621",
        "programs": "18 Month",
        "contact": "Victor Salinas",
        "phone": "(925) 551-3616",
        "fax": "(510) 569-3743",
        "url": "www.duiprograms.ohs.mhn.com",
        "position": "37.7104459, -121.92751829999997",
        "lat": 37.7104459,
        "lng": -121.92751829999997,
        "location": {
          "lat": 37.7104459,
          "lon": -121.92751829999997
        }
      },
      {
        "key": "0300201120",
        "legal_name": "Lifestyle Management Drydock, Inc.",
        "name": "Lifestyle Management, Inc.",
        "address": "11142 Ridge Road",
        "city_state_zip": "Sutter Creek, CA 95685",
        "programs": "First Offender/18 Month",
        "contact": "Diane McNown",
        "phone": "(209) 257-1030",
        "fax": "(209) 257-1028",
        "email_contact": "lsmddp@gmail.com",
        "position": "38.3620159, -120.82002",
        "lat": 38.3620159,
        "lng": -120.82002,
        "location": {
          "lat": 38.3620159,
          "lon": -120.82002
        }
      },
      {
        "key": "0400101123",
        "legal_name": "Prevention Education Program,  Inc.,  A California Cor",
        "name": "Prevention Education Program,  Inc.",
        "address": "1215 Mangrove Avenue, Suite C",
        "city_state_zip": "Chico, CA 95926",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "0400101120   (Satellite)",
        "phone": "(530) 891-6148",
        "fax": "(530) 345-5514",
        "url": "www.preventioned.com",
        "position": "39.7420889, -121.83910159999999",
        "lat": 39.7420889,
        "lng": -121.83910159999999,
        "location": {
          "lat": 39.7420889,
          "lon": -121.83910159999999
        }
      },
      {
        "key": "0400301123",
        "legal_name": "Solutions FPC, Incorporated",
        "name": "Solutions for Positive Choices",
        "address": "645 Normal  Avenue, Suite 100",
        "city_state_zip": "Chico, CA 95928",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Dena Elder",
        "phone": "(530) 898-8333",
        "fax": "(530) 898-8060",
        "email_contact": "duisol@sbcglobal.net",
        "url": "www.duisolutions.org",
        "position": "39.7253032, -121.839178",
        "lat": 39.7253032,
        "lng": -121.839178,
        "location": {
          "lat": 39.7253032,
          "lon": -121.839178
        }
      },
      {
        "key": "0400302123",
        "legal_name": "Solutions FPC, Incorporated",
        "name": "Solutions for Positive Choices",
        "address": "1855 Myers Street",
        "city_state_zip": "Oroville, CA 95966",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Dena Elder",
        "phone": "(530) 532-6969",
        "fax": "(530) 532-6968",
        "email_contact": "solutions1855@att.net",
        "url": "www.duisolutions.org",
        "position": "39.510118, -121.55296299999998",
        "lat": 39.510118,
        "lng": -121.55296299999998,
        "location": {
          "lat": 39.510118,
          "lon": -121.55296299999998
        }
      },
      {
        "key": "0400303123",
        "legal_name": "Solutions FPC, Incorporated",
        "name": "Solutions for Positive Choices",
        "address": "5923 Clark Road, Suite F & G",
        "city_state_zip": "Paradise, CA 95969",
        "mailing_address": "P.O. Box 1316",
        "mailing_city_state_zip": "Paradise, CA  95967",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Dena Elder",
        "phone": "(530)  877-5336",
        "fax": "(530) 872-7960",
        "email_contact": "solutions5923@att.net",
        "url": "www.duisolutions.org",
        "position": "39.760807, -121.60441900000001",
        "lat": 39.760807,
        "lng": -121.60441900000001,
        "location": {
          "lat": 39.760807,
          "lon": -121.60441900000001
        }
      },
      {
        "key": "0500101120",
        "legal_name": "Calaveras County Health Service Agency",
        "name": "Calaveras County  Driving Under the Influence Progra",
        "address": "891 Mountain Ranch  Road",
        "city_state_zip": "San  Andreas, CA 95249  W",
        "programs": "First Offender/18 Month",
        "contact": "www.co.calaveras.ca.us",
        "fax": "(209) 754-6559",
        "position": "38.1914389, -120.66811080000002",
        "lat": 38.1914389,
        "lng": -120.66811080000002,
        "location": {
          "lat": 38.1914389,
          "lon": -120.66811080000002
        }
      },
      {
        "key": "0600301120",
        "legal_name": "Razo and Ruiz Services, Inc.",
        "name": "Addiction Recovery  Colusa",
        "address": "533 Fifth Street",
        "city_state_zip": "Colusa, CA 95932",
        "programs": "First Offender/18 Month",
        "contact": "Crickett Razo",
        "phone": "(530) 458-0534",
        "fax": "(530) 458-2060",
        "url": "www.arcdui.com",
        "position": "39.210664, -122.00886400000002",
        "lat": 39.210664,
        "lng": -122.00886400000002,
        "location": {
          "lat": 39.210664,
          "lon": -122.00886400000002
        }
      },
      {
        "key": "0700201120",
        "legal_name": "Alcohol  And Drug Abuse Council of Contra Costa, Inc.",
        "name": "Alcohol & Drug Abuse Council Of Contra  Costa Co., Inc.",
        "address": "2020 North Broadway, Suite 101",
        "city_state_zip": "Walnut Creek, CA 94596",
        "programs": "First Offender/18 Month",
        "contact": "Diane Carpenter",
        "phone": "(925) 932-8100",
        "fax": "(925) 932-8392",
        "url": "www.adaccc.com",
        "position": "37.9073198, -122.06142729999999",
        "lat": 37.9073198,
        "lng": -122.06142729999999,
        "location": {
          "lat": 37.9073198,
          "lon": -122.06142729999999
        }
      },
      {
        "key": "0700301120",
        "legal_name": "Bi-Bett",
        "name": "Future Solutions",
        "address": "560 Lennon Lane, Suite 200",
        "city_state_zip": "Walnut Creek, CA 94598",
        "mailing_address": "P.O. Box 5487",
        "mailing_city_state_zip": "Concord, CA  94524",
        "programs": "First Offender/18 Month",
        "contact": "Susan Cinelli",
        "phone": "(925) 798-7250",
        "fax": "(925) 798-3359",
        "email_contact": "bbacct@att.net",
        "position": "37.9308546, -122.03160969999999",
        "lat": 37.9308546,
        "lng": -122.03160969999999,
        "location": {
          "lat": 37.9308546,
          "lon": -122.03160969999999
        }
      },
      {
        "key": "0700302120",
        "legal_name": "Bi-Bett",
        "name": "Dawn Center",
        "address": "1251 California Avenue, Suite 600",
        "city_state_zip": "Pittsburg, CA 94565",
        "programs": "First Offender/18 Month",
        "contact": "William Spring",
        "phone": "(925) 439-1332",
        "fax": "(925) 439-0322",
        "email_contact": "dawncenterdui@yahoo.com",
        "position": "38.0141443, -121.86799580000002",
        "lat": 38.0141443,
        "lng": -121.86799580000002,
        "location": {
          "lat": 38.0141443,
          "lon": -121.86799580000002
        }
      },
      {
        "key": "0700303120",
        "legal_name": "Bi-Bett",
        "name": "Pueblos Del Sol Education Program",
        "address": "121 Sand Creek Road, Suite A",
        "city_state_zip": "Brentwood, CA 94513",
        "programs": "First Offender/18 Month",
        "contact": "Wanda Mathews",
        "phone": "(925) 240-7213",
        "fax": "(925) 240-7407",
        "email_contact": "brentwoodpds@yahoo.com",
        "position": "37.9471837, -121.69838040000002",
        "lat": 37.9471837,
        "lng": -121.69838040000002,
        "location": {
          "lat": 37.9471837,
          "lon": -121.69838040000002
        }
      },
      {
        "key": "0700501120",
        "legal_name": "Neighborhood House Of North Richmond",
        "name": "Neighborhood House Of North Richmond",
        "address": "3065 Richmond Parkway, Suite 114",
        "city_state_zip": "Richmond, CA 94806",
        "programs": "First Offender/18 Month",
        "contact": "Pamela Neyland",
        "phone": "(510) 229-5000",
        "fax": "(510) 235-3112",
        "url": "www.nhnr.org",
        "position": "37.9905403, -122.3293362",
        "lat": 37.9905403,
        "lng": -122.3293362,
        "location": {
          "lat": 37.9905403,
          "lon": -122.3293362
        }
      },
      {
        "key": "0700801120",
        "legal_name": "MHN Government Services, Inc.",
        "name": "Occupational Health Services, Inc.",
        "address": "2600 Stanwell Drive, Suite 100",
        "city_state_zip": "Concord, CA 94520",
        "programs": "First Offender/18 Month",
        "contact": "Katherine Ide-Baggett",
        "phone": "(925) 356-3512",
        "fax": "(925) 798-1145",
        "url": "www.duiprograms.ohs.mhn.org",
        "position": "37.9868543, -122.0475935",
        "lat": 37.9868543,
        "lng": -122.0475935,
        "location": {
          "lat": 37.9868543,
          "lon": -122.0475935
        }
      },
      {
        "key": "0700802120",
        "legal_name": "MHN Government Services, Inc.",
        "name": "Occupational Health Services, Inc.",
        "address": "11299 San Pablo Avenue, Suite W",
        "city_state_zip": "El Cerrito, CA 94530",
        "programs": "First Offender/18 Month",
        "contact": "Katherine Ide-Baggett",
        "phone": "(925) 356-3512",
        "fax": "(925) 798-1145",
        "url": "www.duiprograms.ohs.mhn.org",
        "position": "37.9200934, -122.31560300000001",
        "lat": 37.9200934,
        "lng": -122.31560300000001,
        "location": {
          "lat": 37.9200934,
          "lon": -122.31560300000001
        }
      },
      {
        "key": "0800201120",
        "legal_name": "Humboldt  Addictions Services Program",
        "name": "Humboldt Addictions Services Program",
        "address": "349 G  Street",
        "city_state_zip": "Crescent City, CA 95531",
        "programs": "First Offender/18 Month",
        "contact": "Sandra Morrison",
        "phone": "(707) 464-7849",
        "fax": "(707) 465-6522",
        "email_contact": "hasp2001@aol.com",
        "position": "41.752246, -124.19878499999999",
        "lat": 41.752246,
        "lng": -124.19878499999999,
        "location": {
          "lat": 41.752246,
          "lon": -124.19878499999999
        }
      },
      {
        "key": "0900201120",
        "legal_name": "EDCA Lifeskills",
        "name": "EDCA Lifeskills",
        "address": "893 Spring  Street",
        "city_state_zip": "Placerville, CA 95667",
        "programs": "First Offender/18 Month",
        "contact": "David Del Rio",
        "phone": "(530) 622-8193",
        "fax": "(530) 622-4017",
        "email_contact": "ddelrio@edcalifeskills.com",
        "position": "38.7316643, -120.80363590000002",
        "lat": 38.7316643,
        "lng": -120.80363590000002,
        "location": {
          "lat": 38.7316643,
          "lon": -120.80363590000002
        }
      },
      {
        "key": "0900301123",
        "legal_name": "Tahoe Turning Point, Inc.",
        "name": "Tahoe Turning Point, Inc.",
        "address": "2494 Lake Tahoe Boulevard, Suite B5",
        "city_state_zip": "South Lake Tahoe, CA  96150",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Marc Arroves",
        "phone": "(530) 541-4594",
        "fax": "(530) 542-1226",
        "position": "38.9236671, -119.98781480000002",
        "lat": 38.9236671,
        "lng": -119.98781480000002,
        "location": {
          "lat": 38.9236671,
          "lon": -119.98781480000002
        }
      },
      {
        "key": "1000201120",
        "legal_name": "Fresno County  Hispanic Commission",
        "name": "On Alcohol",
        "address": "And Drug  Abuse Services  Inc.",
        "city_state_zip": "D.A.T.E.",
        "programs": "1803 Broadway Street",
        "contact": "Domingo Zapata",
        "phone": "(559) 268-6475",
        "fax": "(559) 268-6967",
        "url": "www.hispaniccommission.org",
        "position": "36.741211, -119.80028600000003",
        "lat": 36.741211,
        "lng": -119.80028600000003,
        "location": {
          "lat": 36.741211,
          "lon": -119.80028600000003
        }
      },
      {
        "key": "1000202120",
        "legal_name": "Fresno County  Hispanic Commission On",
        "name": "Alcohol And Drug  Abuse Services, Inc.",
        "address": "D.A.T.E.",
        "city_state_zip": "1419 Jensen  Avenue, Suite 106",
        "programs": "Sanger, CA 93657",
        "contact": "Domingo Zapata",
        "phone": "(559) 875-0249",
        "fax": "(559)  875-0276",
        "url": "www.hispaniccommission.org",
        "email_contact": "fchcmrz@aol.com",
        "position": "36.7074141, -119.55783099999996",
        "lat": 36.7074141,
        "lng": -119.55783099999996,
        "location": {
          "lat": 36.7074141,
          "lon": -119.55783099999996
        }
      },
      {
        "key": "1000301120",
        "legal_name": "Kings View",
        "name": "Kings View Community Services",
        "address": "1410 F Street, Suite 101",
        "city_state_zip": "Fresno, CA  93706",
        "programs": "First Offender/18 Month",
        "contact": "Jennifer Montgomery",
        "phone": "(559) 457-2302",
        "fax": "(559) 457-2324",
        "url": "www.kingsview.org",
        "position": "36.7350097, -119.79932630000002",
        "lat": 36.7350097,
        "lng": -119.79932630000002,
        "location": {
          "lat": 36.7350097,
          "lon": -119.79932630000002
        }
      },
      {
        "key": "1000302120",
        "legal_name": "Kings View",
        "name": "Kings View Community Services",
        "address": "1521 Tollhouse, Suite G",
        "city_state_zip": "Clovis, CA 93611",
        "mailing_address": "1410 F Street, Suite 101",
        "mailing_city_state_zip": "Fresno, CA 93706",
        "programs": "First Offender/18 Month",
        "contact": "Jennifer Montgomery",
        "phone": "(559) 325-9174",
        "fax": "(559) 325-1663",
        "url": "www.kingsview.org",
        "position": "36.8295992, -119.68715609999998",
        "lat": 36.8295992,
        "lng": -119.68715609999998,
        "location": {
          "lat": 36.8295992,
          "lon": -119.68715609999998
        }
      },
      {
        "key": "1000501120",
        "legal_name": "A & J Social Services",
        "name": "Special Services Community Center",
        "address": "855 West Ashlan Avenue, Suite 101",
        "city_state_zip": "Clovis, CA 93612",
        "programs": "First Offender/18 Month",
        "contact": "Joseph Montes",
        "phone": "(559) 348-0129",
        "fax": "(559) 348-1367",
        "email_contact": "joe@duisscc.com",
        "position": "36.7944143, -119.72834869999997",
        "lat": 36.7944143,
        "lng": -119.72834869999997,
        "location": {
          "lat": 36.7944143,
          "lon": -119.72834869999997
        }
      },
      {
        "key": "1000502120",
        "legal_name": "A & J Social Services",
        "name": "Special Services Community Center",
        "address": "661 South Madera Avenue",
        "city_state_zip": "Kerman, CA 93630",
        "programs": "First Offender/18 Month",
        "contact": "Joseph Montes",
        "phone": "(559) 846-8444",
        "fax": "(559) 842-8299",
        "email_contact": "joe@duisscc.com",
        "position": "36.7250039, -120.0606828",
        "lat": 36.7250039,
        "lng": -120.0606828,
        "location": {
          "lat": 36.7250039,
          "lon": -120.0606828
        }
      },
      {
        "key": "1000503120",
        "legal_name": "A & J Social Services",
        "name": "Special Services Community Center",
        "address": "749 G Street",
        "city_state_zip": "Reedley, CA 93654",
        "programs": "First Offender/18 Month",
        "contact": "Joseph Montes",
        "phone": "(559) 637-1036",
        "fax": "(559) 637-7233",
        "email_contact": "joe@duisscc.com",
        "position": "36.59966780000001, -119.4545253",
        "lat": 36.59966780000001,
        "lng": -119.4545253,
        "location": {
          "lat": 36.59966780000001,
          "lon": -119.4545253
        }
      },
      {
        "key": "1000504120",
        "legal_name": "A & J Social Services",
        "name": "Special Services Community Center",
        "address": "3410 McCall Avenue, Suite 109",
        "city_state_zip": "Selma, CA 93662",
        "programs": "First Offender/18 Month",
        "contact": "Joseph Montes",
        "phone": "(559) 896-3593",
        "fax": "(559) 896-3598",
        "email_contact": "joe@duisscc.com",
        "position": "36.5844039, -119.61050390000003",
        "lat": 36.5844039,
        "lng": -119.61050390000003,
        "location": {
          "lat": 36.5844039,
          "lon": -119.61050390000003
        }
      },
      {
        "key": "1200101120",
        "legal_name": "Fortuna Adventist Community Services",
        "name": "Humboldt Alcohol Recovery Treatment",
        "address": "2331 Rohnerville Road",
        "city_state_zip": "Fortuna, CA 95540",
        "programs": "First Offender/18 Month",
        "contact": "Rhonda Lewis",
        "phone": "(707) 725-9381",
        "fax": "(707) 725-1613",
        "url": "www.fortunaacs.com",
        "position": "40.594771, -124.142111",
        "lat": 40.594771,
        "lng": -124.142111,
        "location": {
          "lat": 40.594771,
          "lon": -124.142111
        }
      },

      {
        "key": "1300201100",
        "legal_name": "Jungers, Edward N.",
        "name": "Imperial  Valley Safety Services",
        "address": "480 Olive Avenue, Suite 3A",
        "city_state_zip": "El Centro, CA 92243",
        "programs": "First Offender",
        "contact": "Edward N. Jungers",
        "phone": "(760) 353-7780",
        "fax": "(760) 353-7784",
        "url": "www.ivsafetyservices.com",
        "position": "32.7909931, -115.55445020000002",
        "lat": 32.7909931,
        "lng": -115.55445020000002,
        "location": {
          "lat": 32.7909931,
          "lon": -115.55445020000002
        }
      },
      {
        "key": "1300301020",
        "legal_name": "Sober Roads, Incorporated",
        "name": "Sober Road, Inc.",
        "address": "584 Main Street, Suite C",
        "city_state_zip": "El Centro, CA 92243",
        "programs": "18 Month",
        "contact": "Martin Carrion",
        "phone": "(760) 352-8888",
        "fax": "(760) 352-8517",
        "email_contact": "dui_no_more@att.net",
        "position": "32.793138, -115.556556",
        "lat": 32.793138,
        "lng": -115.556556,
        "location": {
          "lat": 32.793138,
          "lon": -115.556556
        }
      },
      {
        "key": "1400101120",
        "legal_name": "Inyo County Department Of Health And Human Services",
        "name": "Inyo County Substance Abuse Services",
        "address": "162 Grove Street",
        "city_state_zip": "Bishop, CA 93514",
        "programs": "First Offender/18 Month",
        "contact": "Gail Zwier",
        "phone": "(760) 873-6533",
        "fax": "(760) 873-3277",
        "email_contact": "gzwier@inyocounty.us",
        "position": "37.3646165, -118.39591289999998",
        "lat": 37.3646165,
        "lng": -118.39591289999998,
        "location": {
          "lat": 37.3646165,
          "lon": -118.39591289999998
        }
      },
      {
        "key": "1500101120",
        "legal_name": "Special Treatment, Education And Prevention Services, In c",
        "name": "S.T.E.P.S.",
        "address": "3533 Mount Vernon Avenue",
        "city_state_zip": "Bakersfield, CA 93306  W",
        "programs": "First Offender/18 Month",
        "contact": "Linda Eviston",
        "phone": "(661) 871-3353",
        "fax": "(661) 871-9549",
        "url": "www.steps-inc.com",
        "position": "35.4057249, -118.96581320000001",
        "lat": 35.4057249,
        "lng": -118.96581320000001,
        "location": {
          "lat": 35.4057249,
          "lon": -118.96581320000001
        }
      },
      {
        "key": "1500301120",
        "legal_name": "Traffic And Alcohol Awareness School Of Kern, Inc.",
        "name": "Traffic and Alcohol Awareness School of Kern, Inc.",
        "address": "324 Oak Street, Suite A",
        "city_state_zip": "Bakersfield, CA 93304",
        "mailing_address": "PO Box 40400",
        "mailing_city_state_zip": "Bakersfield, CA 93384",
        "programs": "First Offender/18 Month",
        "contact": "Jim McManus",
        "phone": "(661) 322-8862",
        "fax": "(661) 322-7906",
        "url": "www.taaskinc.com",
        "position": "35.3603098, -119.03840359999998",
        "lat": 35.3603098,
        "lng": -119.03840359999998,
        "location": {
          "lat": 35.3603098,
          "lon": -119.03840359999998
        }
      },
      {
        "key": "1500302120",
        "legal_name": "Traffic And Alcohol Awareness School Of Kern, Inc.",
        "name": "Traffic and Alcohol Awareness School of Kern, Inc.",
        "address": "525 Bear Mountain Boulevard",
        "city_state_zip": "Arvin, CA 93203",
        "mailing_address": "PO Box 40400",
        "mailing_city_state_zip": "Bakersfield, CA 93384",
        "programs": "First Offender/18 Month",
        "contact": "Jim McManus",
        "phone": "(661) 322-8862",
        "fax": "(661) 322-7906",
        "url": "www.taaskinc.com",
        "position": "35.208796, -118.83062799999999",
        "lat": 35.208796,
        "lng": -118.83062799999999,
        "location": {
          "lat": 35.208796,
          "lon": -118.83062799999999
        }
      },
      {
        "key": "1500303120",
        "legal_name": "Traffic And Alcohol Awareness School Of Kern, Inc.",
        "name": "Traffic and Alcohol Awareness School of Kern, Inc.",
        "address": "1427 South Lexington Street, Building A, Suite 11",
        "city_state_zip": "Delano, CA 93215",
        "mailing_address": "PO Box 40400",
        "mailing_city_state_zip": "Bakersfield, CA 93384",
        "programs": "First Offender/18 Month",
        "contact": "Jim McManus",
        "phone": "(661) 322-8862",
        "fax": "(661) 322-7906",
        "url": "www.taaskinc.com",
        "position": "35.7420186, -119.2409323",
        "lat": 35.7420186,
        "lng": -119.2409323,
        "location": {
          "lat": 35.7420186,
          "lon": -119.2409323
        }
      },
      {
        "key": "1500304120",
        "legal_name": "Traffic And Alcohol Awareness School Of Kern, Inc.",
        "name": "Traffic and Alcohol Awareness School of Kern, Inc.",
        "address": "511 Central Valley Highway",
        "city_state_zip": "Shafter, CA 93263",
        "mailing_address": "PO Box 40400",
        "mailing_city_state_zip": "Bakersfield, CA 93384",
        "programs": "eb",
        "contact": "Jim McManus",
        "phone": "(661) 322-8862",
        "fax": "(661) 322-7906",
        "url": "www.taaskinc.com",
        "position": "35.5025416, -119.27427560000001",
        "lat": 35.5025416,
        "lng": -119.27427560000001,
        "location": {
          "lat": 35.5025416,
          "lon": -119.27427560000001
        }
      },

      {
        "key": "1500306120",
        "legal_name": "Traffic And Alcohol Awareness School Of Kern, Inc.",
        "name": "Traffic and Alcohol Awareness School of Kern, Inc.",
        "address": "443 West Church Street",
        "city_state_zip": "Ridgecrest, CA 93555",
        "mailing_address": "PO Box 187",
        "mailing_city_state_zip": "Ridgecrest, CA 93555",
        "programs": "First Offender/18 Month",
        "contact": "Pamela Nichols",
        "phone": "(760) 371-9412",
        "fax": "(760) 384-4969",
        "url": "www.taaskinc.com",
        "position": "35.6185991, -117.67875149999998",
        "lat": 35.6185991,
        "lng": -117.67875149999998,
        "location": {
          "lat": 35.6185991,
          "lon": -117.67875149999998
        }
      },
      {
        "key": "1500307120",
        "legal_name": "Traffic And Alcohol Awareness School Of Kern, Inc.",
        "name": "Traffic and Alcohol Awareness School of Kern, Inc.",
        "address": "15664 K Street",
        "city_state_zip": "Mojave, CA 93501",
        "mailing_address": "PO Box 187",
        "mailing_city_state_zip": "Ridgecrest, CA 93555",
        "programs": "First Offender/18 Month",
        "contact": "Pamela Nichols",
        "phone": "(760) 371-9412",
        "fax": "(760) 384-4969",
        "url": "www.taaskinc.com",
        "position": "35.0498331, -118.17107880000003",
        "lat": 35.0498331,
        "lng": -118.17107880000003,
        "location": {
          "lat": 35.0498331,
          "lon": -118.17107880000003
        }
      },
      {
        "key": "1600101120",
        "legal_name": "Kings View",
        "name": "Kings View Community Services",
        "address": "289 East 8th Street",
        "city_state_zip": "Hanford, CA 93230",
        "programs": "First Offender/18 Month",
        "contact": "Jennifer Montgomery",
        "phone": "(559) 992-4779",
        "fax": "(559) 582-9042",
        "url": "www.kingsview.org",
        "position": "36.3272352, -119.6489886",
        "lat": 36.3272352,
        "lng": -119.6489886,
        "location": {
          "lat": 36.3272352,
          "lon": -119.6489886
        }
      },
      {
        "key": "1700201120",
        "legal_name": "Lake County  Alcohol And Other Drug Service s",
        "name": "Lake County DDP",
        "address": "6302 13th  Street",
        "city_state_zip": "Lucerne, CA 95458",
        "mailing_address": "P.O. Box 1024",
        "mailing_city_state_zip": "Lucerne, CA 95458",
        "programs": "First Offender/18 Month",
        "contact": "Robyn.Rosin@lakecounty.ca.gov",
        "phone": "(707)  274-9101",
        "fax": "(707)  274-9192",
        "position": "39.087978, -122.79288099999997",
        "lat": 39.087978,
        "lng": -122.79288099999997,
        "location": {
          "lat": 39.087978,
          "lon": -122.79288099999997
        }
      },
      {
        "key": "1700202120",
        "legal_name": "Lake County  Alcohol And Other Drug Services",
        "name": "Lake County DDP",
        "address": "7000-B South Center  Drive",
        "city_state_zip": "Clearlake, CA 95422",
        "mailing_address": "P.O. Box 1024",
        "mailing_city_state_zip": "Lucerne, CA 95458",
        "programs": "First Offender/18 Month",
        "contact": "Robyn Rosin",
        "phone": "(707) 994-7090",
        "fax": "(707) 994-7164",
        "email_contact": "Robin.Rosin@lakecounty.ca.gov",
        "position": "38.932515, -122.61953",
        "lat": 38.932515,
        "lng": -122.61953,
        "location": {
          "lat": 38.932515,
          "lon": -122.61953
        }
      },
      {
        "key": "1800201120",
        "legal_name": "Cascade Circle, Inc.",
        "name": "Cascade Circle, Inc.",
        "address": "805 Main Street, Suite J",
        "city_state_zip": "Susanville, CA 96130",
        "mailing_address": "3161 Bechelli Lane, Suite 204B",
        "mailing_city_state_zip": "Redding, CA 96002",
        "programs": "First Offender/18 Month",
        "contact": "Charles Horner",
        "phone": "(530) 222-8302",
        "fax": "(530) 222-5872",
        "email_contact": "cascadecircle.org",
        "position": "40.4181974, -120.66008720000002",
        "lat": 40.4181974,
        "lng": -120.66008720000002,
        "location": {
          "lat": 40.4181974,
          "lon": -120.66008720000002
        }
      },
      {
        "key": "1900101123",
        "legal_name": "A Better Citizen Foundation, Inc.",
        "name": "ABC Traffic Safety Program",
        "address": "12100 E. Carson Street, Suite E",
        "city_state_zip": "Hawaiian Gardens, CA 90716",
        "mailing_address": "3130 S. Harbor Boulevard, Suite 530",
        "mailing_city_state_zip": "Santa Ana, CA 92704",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Cherine Child",
        "phone": "(562) 421-4949",
        "fax": "(562) 421-4929",
        "url": "www.abctraffic.com",
        "position": "33.830088, -118.0742376",
        "lat": 33.830088,
        "lng": -118.0742376,
        "location": {
          "lat": 33.830088,
          "lon": -118.0742376
        }
      },
      {
        "key": "1900102123",
        "legal_name": "A Better Citizen Foundation, Inc.",
        "name": "ABC Traffic Safety Program",
        "address": "3380 Flair Drive, Suite 111",
        "city_state_zip": "El Monte, CA 91731",
        "mailing_address": "3130 S. Harbor Boulevard, Suite 53 0",
        "mailing_city_state_zip": "Santa Ana, CA 92704",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Cherine Child",
        "phone": "(626) 572-7001",
        "fax": "(714) 429-9910",
        "url": "www.abctraffic.com",
        "position": "34.0696639, -118.0711336",
        "lat": 34.0696639,
        "lng": -118.0711336,
        "location": {
          "lat": 34.0696639,
          "lon": -118.0711336
        }
      },
      {
        "key": "1900103100",
        "legal_name": "A Better Citizen Foundation, Inc.",
        "name": "ABC Traffic Safety Program",
        "address": "44746 N. Beech Avenue",
        "city_state_zip": "Lancaster, CA 93534",
        "mailing_address": "3130 S. Harbor Boulevard, Suite 530",
        "mailing_city_state_zip": "Santa Ana, CA 92704",
        "programs": "First Offender",
        "contact": "Cherine Child",
        "phone": "(661) 945-8683",
        "fax": "(661) 945-2319",
        "url": "www.abctraffic.com",
        "position": "34.696025, -118.13760030000003",
        "lat": 34.696025,
        "lng": -118.13760030000003,
        "location": {
          "lat": 34.696025,
          "lon": -118.13760030000003
        }
      },
      {
        "key": "1900104100",
        "legal_name": "A Better Citizen Foundation, Inc.",
        "name": "ABC Traffic Safety Program",
        "address": "453 East Arrow Highway, Suite I",
        "city_state_zip": "Azusa, CA 91702",
        "mailing_address": "3130 S. Harbor Boulevard, Suite 530",
        "mailing_city_state_zip": "Santa Ana, CA 92704",
        "programs": "First Offender",
        "contact": "Cherine Child",
        "phone": "(626) 967-6363",
        "fax": "(626) 967-6366",
        "url": "www.abctraffic.com",
        "position": "34.1074988, -117.90431330000001",
        "lat": 34.1074988,
        "lng": -117.90431330000001,
        "location": {
          "lat": 34.1074988,
          "lon": -117.90431330000001
        }
      },
      {
        "key": "1900201123",
        "legal_name": "ADAPT Programs, Inc.",
        "name": "ADAPT Programs, Inc.",
        "address": "1644 Wilshire Boulevard, Suite 303",
        "city_state_zip": "Los Angeles, CA 90017",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Ronald Webster",
        "phone": "(213) 483-5703",
        "fax": "(213) 483-5363",
        "email_contact": "websteradapt@sbcglobal.net",
        "position": "34.0558242, -118.27179130000002",
        "lat": 34.0558242,
        "lng": -118.27179130000002,
        "location": {
          "lat": 34.0558242,
          "lon": -118.27179130000002
        }
      },
      {
        "key": "1900301123",
        "legal_name": "National Council on Alcoholism and Drug Dependence of East San Gabriel  and Pomona Valleys,",
        "name": "NCADD East San Gabriel and Pomona Valleys",
        "address": "4626 North Grand Avenue",
        "city_state_zip": "Covina, CA 91724",
        "programs": "",
        "contact": "Cheryl Ruedi",
        "phone": "(626) 331-5316",
        "fax": "(626) 332-2219",
        "url": "www.ncaddesgpv.org",
        "position": "34.096412, -117.87197600000002",
        "lat": 34.096412,
        "lng": -117.87197600000002,
        "location": {
          "lat": 34.096412,
          "lon": -117.87197600000002
        }
      },
      {
        "key": "1900401123",
        "legal_name": "National Council On  Alcoholism And Drug Dependence of the South Bay",
        "name": "High Gain Program",
        "address": "9100 South Sepulveda Boulevard, Suite 105",
        "city_state_zip": "Westchester, CA 90045",
        "programs": "",
        "contact": "Deborah Hawkins",
        "phone": "(310) 644-3659",
        "fax": "(310) 216-6747",
        "email_contact": "dlevan@bhs-inc.org",
        "position": "33.9538961, -118.39572190000001",
        "lat": 33.9538961,
        "lng": -118.39572190000001,
        "location": {
          "lat": 33.9538961,
          "lon": -118.39572190000001
        }
      },
      {
        "key": "1900402100",
        "legal_name": "National Council On  Alcoholism and Drug Dependence of the South Bay",
        "name": "High Gain Program",
        "address": "1334 Post Avenue",
        "city_state_zip": "Torrance, CA 90501",
        "programs": "",
        "contact": "Deborah Hawkins",
        "phone": "(310) 328-1587",
        "fax": "(310) 328-1964",
        "email_contact": "dlevan@bhs-inc.org",
        "position": "33.835039, -118.31740539999998",
        "lat": 33.835039,
        "lng": -118.31740539999998,
        "location": {
          "lat": 33.835039,
          "lon": -118.31740539999998
        }
      },
      {
        "key": "1900501123",
        "legal_name": "Alcohol Drug Council  –  High Gain Project",
        "name": "Alcohol Drug Council –  High Gain Project",
        "address": "1424 4th  Street, Suite 205",
        "city_state_zip": "Santa Monica, CA 90401",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Jayne Wise",
        "phone": "(310) 451-5881",
        "fax": "(310) 576-0945",
        "url": "www.adcwa.com",
        "position": "34.0157215, -118.49477030000003",
        "lat": 34.0157215,
        "lng": -118.49477030000003,
        "location": {
          "lat": 34.0157215,
          "lon": -118.49477030000003
        }
      },
      {
        "key": "1900701120",
        "legal_name": "Center For Counseling And Education",
        "name": "Center For  Counseling And Education, Inc.",
        "address": "7120 Topanga Canyon Boulevard",
        "city_state_zip": "Canoga Park, CA 91303",
        "programs": "First Offender/18 Month",
        "contact": "Wendie Warwick",
        "phone": "(818) 992-0460",
        "fax": "(818) 992-0462",
        "email_contact": "eccentricww@aol.com",
        "position": "34.1998527, -118.60564119999998",
        "lat": 34.1998527,
        "lng": -118.60564119999998,
        "location": {
          "lat": 34.1998527,
          "lon": -118.60564119999998
        }
      },


      {
        "key": "1901205123",
        "legal_name": "Driver Safety Schools, Inc.",
        "name": "Driver Safety School West LA",
        "address": "2511 South Barrington Avenue 2nd  Floor, Suite 200",
        "city_state_zip": "West Los Angeles, CA 90064",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Arnold Abrams",
        "phone": "(310) 479-8353",
        "fax": "(310) 575-0500",
        "email_contact": "driversafetywestla@sbcglobal.net",
        "position": "34.0284724, -118.44373300000001",
        "lat": 34.0284724,
        "lng": -118.44373300000001,
        "location": {
          "lat": 34.0284724,
          "lon": -118.44373300000001
        }
      },
      {
        "key": "1901301123",
        "legal_name": "East Los Angeles Alcoholism Council",
        "name": "East Los Angeles Alcoholism Council",
        "address": "916 South Atlantic Boulevard",
        "city_state_zip": "Los Angeles, CA 90022",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Xiomara Lopez",
        "phone": "(323) 268-9344",
        "fax": "(323) 268-1114",
        "email_contact": "",
        "position": "34.0197675, -118.15721930000001",
        "lat": 34.0197675,
        "lng": -118.15721930000001,
        "location": {
          "lat": 34.0197675,
          "lon": -118.15721930000001
        }
      },
      {
        "key": "1901401123",
        "legal_name": "High Gain Foundation",
        "name": "Harbor Area High Gain Program, Inc.",
        "address": "315-A East 11th Street",
        "city_state_zip": "Long Beach, CA 90813",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Robert Saucedo",
        "phone": "(562) 436-9801",
        "fax": "(562) 436-9803",
        "email_contact": "harborhighgain@gmail.com",
        "position": "33.7810452, -118.18882100000002",
        "lat": 33.7810452,
        "lng": -118.18882100000002,
        "location": {
          "lat": 33.7810452,
          "lon": -118.18882100000002
        }
      },
      {
        "key": "1901501123",
        "legal_name": "The High Road Program",
        "name": "The High Road Program",
        "address": "700 South Arroyo Parkway",
        "city_state_zip": "Pasadena, CA 91105",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Juan Martinez (starts 2/22/2017)",
        "phone": "(626) 795-6159",
        "fax": "(626) 795-9540",
        "email_contact": "juanmartinez@hrpinc.org",
        "position": "34.1336462, -118.1469032",
        "lat": 34.1336462,
        "lng": -118.1469032,
        "location": {
          "lat": 34.1336462,
          "lon": -118.1469032
        }
      },
      {
        "key": "1901502123",
        "legal_name": "The High Road Program",
        "name": "The High Road Program",
        "address": "14430 Sherman Way",
        "city_state_zip": "Van Nuys, CA 91450-2340",
        "programs": "elacouncil@yahoo.com",
        "contact": "Sasha Petrovich",
        "phone": "(818) 785-9119",
        "fax": "(818) 785-2150",
        "email_contact": "sashapetrovich@highroadprogram.org",
        "position": "34.2005255, -118.4475845",
        "lat": 34.2005255,
        "lng": -118.4475845,
        "location": {
          "lat": 34.2005255,
          "lon": -118.4475845
        }
      },
      {
        "key": "1901503023",
        "legal_name": "The High Road Program",
        "name": "The High Road Program",
        "address": "44823 Date A venue",
        "city_state_zip": "Lancaster, CA 93534",
        "programs": "18 Month/30 Month",
        "contact": "Michael Napier",
        "phone": "(661) 942-2241",
        "fax": "(661) 942-7040",
        "email_contact": "michaelnapier@highroadprogram.org",
        "position": "34.696784, -118.140917",
        "lat": 34.696784,
        "lng": -118.140917,
        "location": {
          "lat": 34.696784,
          "lon": -118.140917
        }
      },
      {
        "key": "1901701120",
        "legal_name": "Northeast Valley Health Corporation",
        "name": "Northeast Valley Health Corp. DUI Program",
        "address": "1036 N. Maclay",
        "city_state_zip": "San Fernando, CA 91340",
        "programs": "First Offender/18 Month",
        "contact": "Vince Avila",
        "phone": "(818) 365-2571",
        "fax": "(818) 837-6427",
        "url": "www.nevhc.org",
        "position": "34.2942751, -118.4258433",
        "lat": 34.2942751,
        "lng": -118.4258433,
        "location": {
          "lat": 34.2942751,
          "lon": -118.4258433
        }
      },
      {
        "key": "1901901123",
        "legal_name": "Right On Programs, Inc.",
        "name": "Right On Programs",
        "address": "522 East Broadway, Suite 101",
        "city_state_zip": "Glendale, CA 91205",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Cherie Marshall",
        "phone": "(818) 240-1683",
        "fax": "(818) 240-2858",
        "email_contact": "roprograms@aol.com",
        "position": "34.1461222, -118.24902550000002",
        "lat": 34.1461222,
        "lng": -118.24902550000002,
        "location": {
          "lat": 34.1461222,
          "lon": -118.24902550000002
        }
      },
      {
        "key": "1901902123",
        "legal_name": "Right On Programs, Inc.",
        "name": "Padre",
        "address": "401 South Glenoaks Boulevard, Suite 201",
        "city_state_zip": "Burbank, CA 91502",
        "mailing_address": "522 East Broadway, Suite 101",
        "mailing_city_state_zip": "Glendale, CA 91205",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Cherie Marshall",
        "phone": "(818) 843-7375",
        "fax": "(818) 843-8058",
        "email_contact": "roprograms@aol.com",
        "position": "34.1804456, -118.30332350000003",
        "lat": 34.1804456,
        "lng": -118.30332350000003,
        "location": {
          "lat": 34.1804456,
          "lon": -118.30332350000003
        }
      },
      {
        "key": "1902001123",
        "legal_name": "Safety Consultant Services, Inc.",
        "name": "Safety Consultant Services, Inc.",
        "address": "2904 South Main Street",
        "city_state_zip": "Los Angeles, CA  90007",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Ampelia Flores",
        "phone": "(213) 748-9444",
        "fax": "(213) 746-7254",
        "url": "www.safetyconsultantservicesinc.com",
        "position": "34.0222042, -118.27008660000001",
        "lat": 34.0222042,
        "lng": -118.27008660000001,
        "location": {
          "lat": 34.0222042,
          "lon": -118.27008660000001
        }
      },
      {
        "key": "1902002123",
        "legal_name": "Safety Consultant  Services, Inc.",
        "name": "Safety Consultant Services, Inc.",
        "address": "5518 North Long Beach Boulevard",
        "city_state_zip": "Long Beach, CA 90805",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Yolanda Litzinger",
        "phone": "(562) 428-6426",
        "fax": "(562) 428-9771",
        "url": "www.safetyconsultantservicesinc.com",
        "position": "33.8563316, -118.19703859999998",
        "lat": 33.8563316,
        "lng": -118.19703859999998,
        "location": {
          "lat": 33.8563316,
          "lon": -118.19703859999998
        }
      },
      {
        "key": "1902003123",
        "legal_name": "Safety Consultant Services, Inc.",
        "name": "Safety Consultant Services, Inc.",
        "address": "24506 ½ Lyons Avenue",
        "city_state_zip": "Newhall, CA 91321",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Alison Plante",
        "phone": "(661) 255-7720",
        "fax": "(661) 255-1030",
        "url": "www.safetyconsultantservicesinc.com",
        "position": "34.377188, -118.56309899999997",
        "lat": 34.377188,
        "lng": -118.56309899999997,
        "location": {
          "lat": 34.377188,
          "lon": -118.56309899999997
        }
      },
      {
        "key": "1902004123",
        "legal_name": "Safety Consultant Services, Inc.",
        "name": "Safety Consultant Services, Inc.",
        "address": "4120 Tweedy Boulevard",
        "city_state_zip": "South Gate, CA 90280",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "William Grumblatt",
        "phone": "(323) 567-0527",
        "fax": "(323) 567-7421",
        "url": "www.safetyconsultantservicesinc.com",
        "position": "33.943257, -118.19925599999999",
        "lat": 33.943257,
        "lng": -118.19925599999999,
        "location": {
          "lat": 33.943257,
          "lon": -118.19925599999999
        }
      },
      {
        "key": "1902005123",
        "legal_name": "Safety Consultant Services, Inc.",
        "name": "Safety Consultant Services, Inc.",
        "address": "13501 East Whittier Boulevard",
        "city_state_zip": "Whittier, CA 90605",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Ray Rojas",
        "phone": "(562) 945-2493",
        "fax": "(562) 693-8785",
        "url": "www.safetyconsultantservicesinc.com",
        "position": "33.96282660000001, -118.0317048",
        "lat": 33.96282660000001,
        "lng": -118.0317048,
        "location": {
          "lat": 33.96282660000001,
          "lon": -118.0317048
        }
      },
      {
        "key": "1902101123",
        "legal_name": "Safety Education Center, Inc.",
        "name": "Safety Education Center, Inc.",
        "address": "1515 West Cameron  Avenue, Suite 300",
        "city_state_zip": "West Covina, CA 91790",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Patricia Hidalgo",
        "phone": "(626) 960-3977",
        "fax": "(626) 960-9151",
        "email_contact": "tam4m7@adol.com",
        "position": "34.06862340000001, -117.94126819999997",
        "lat": 34.06862340000001,
        "lng": -117.94126819999997,
        "location": {
          "lat": 34.06862340000001,
          "lon": -117.94126819999997
        }
      },
      {
        "key": "1902102123",
        "legal_name": "Safety Education Center, Inc.",
        "name": "Safety Education Center, Inc.",
        "address": "844 North Hollywood Way",
        "city_state_zip": "Burbank, CA 91505",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Rosita Vega",
        "phone": "(818) 848-8667",
        "fax": "(818) 848-6398",
        "email_contact": "tam4m7@adol.com",
        "position": "34.1659961, -118.34583750000002",
        "lat": 34.1659961,
        "lng": -118.34583750000002,
        "location": {
          "lat": 34.1659961,
          "lon": -118.34583750000002
        }
      },
      {
        "key": "1902103123",
        "legal_name": "Safety Education Center, Inc.",
        "name": "Safety  Education Center, Inc.",
        "address": "18700 Sherman  Way,  Suite 118",
        "city_state_zip": "Reseda, CA 91335",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Mayela Alvarez",
        "phone": "(818) 708-1198",
        "fax": "(818) 708-2287",
        "email_contact": "territalk1@aol.com",
        "position": "34.2008377, -118.54082210000001",
        "lat": 34.2008377,
        "lng": -118.54082210000001,
        "location": {
          "lat": 34.2008377,
          "lon": -118.54082210000001
        }
      },
      {
        "key": "1902201123",
        "legal_name": "Self-Improvement  And  Alternative Measures, Inc.",
        "name": "Self-Improvement And  Alternative Measures",
        "address": "3450  West 43rd  Street,  Suite 217",
        "city_state_zip": "Los Angeles, CA 90008",
        "mailing_address": "3736 Stocker  Street,  Apartment 3",
        "mailing_city_state_zip": "Los A ngeles, CA 90008",
        "programs": "First Offender/18 Month",
        "contact": "Kevin Williams",
        "phone": "(323) 292-0581",
        "fax": "(323) 296-4157",
        "email_contact": "siam1@sbcglobal.net",
        "position": "34.005569, -118.33302900000001",
        "lat": 34.005569,
        "lng": -118.33302900000001,
        "location": {
          "lat": 34.005569,
          "lon": -118.33302900000001
        }
      },
      {
        "key": "1902301123",
        "legal_name": "Southern California  Alcohol  And Drug Programs, Inc.",
        "name": "Southern California Alcohol  And Drug Programs, Inc.",
        "address": "11500 Paramount Boulevard",
        "city_state_zip": "Downey, CA 90241",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "tbarcenas@scadpinc.org",
        "phone": "(562) 923-4545",
        "fax": "(562) 862-7205",
        "email_contact": "scadpdui@yahoo.com",
        "position": "33.9401622, -118.13946900000002",
        "lat": 33.9401622,
        "lng": -118.13946900000002,
        "location": {
          "lat": 33.9401622,
          "lon": -118.13946900000002
        }
      },
      {
        "key": "1902302100",
        "legal_name": "Southern California  Alcohol  And Drug Programs, Inc.",
        "name": "Southern California Alcohol  And Drug Programs, Inc.",
        "address": "13205 South Street",
        "city_state_zip": "Cerritos, CA 90703",
        "programs": "First Offender",
        "contact": "tbarcenas@scadpinc.org",
        "phone": "(562) 402-2466",
        "fax": "(562) 402-8077",
        "email_contact": "scadpdui@yahoo.com",
        "position": "33.8598852, -118.05034949999998",
        "lat": 33.8598852,
        "lng": -118.05034949999998,
        "location": {
          "lat": 33.8598852,
          "lon": -118.05034949999998
        }
      },
      {
        "key": "1902401123",
        "legal_name": "Driver Benefits Incorporated",
        "name": "Driver Benefits  Programs",
        "address": "2370 West Carson Street, Suite 150",
        "city_state_zip": "Torrance, CA 90501",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "William Wickline",
        "phone": "(310) 320-9550",
        "fax": "(310) 533-9253",
        "url": "www.driverbenefitsinc.com",
        "position": "33.8306544, -118.32539209999999",
        "lat": 33.8306544,
        "lng": -118.32539209999999,
        "location": {
          "lat": 33.8306544,
          "lon": -118.32539209999999
        }
      },
      {
        "key": "1902501123",
        "legal_name": "Behavioral Systems  Southwest, Inc.",
        "name": "Behavioral Systems Southwest",
        "address": "6411 Hollywood Boulevard, 2nd  Floor",
        "city_state_zip": "Los Angeles, CA 90028",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Ryan Diaz",
        "phone": "(323) 461-2779",
        "fax": "(323) 461-4107",
        "email_contact": "rdiaz@behavioralsystemssouthwest.com",
        "position": "34.1018829, -118.32998800000001",
        "lat": 34.1018829,
        "lng": -118.32998800000001,
        "location": {
          "lat": 34.1018829,
          "lon": -118.32998800000001
        }
      },
      {
        "key": "1902601123",
        "legal_name": "Twin Palms Recovery C enter",
        "name": "Twin  Palms Recovery  Center",
        "address": "3574 Lexington Avenue",
        "city_state_zip": "El Monte, CA 91731",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Craig French",
        "phone": "(626) 443-4008",
        "fax": "(626) 443-1059",
        "url": "www.twinpalmsrc.org",
        "position": "34.074557, -118.03886799999998",
        "lat": 34.074557,
        "lng": -118.03886799999998,
        "location": {
          "lat": 34.074557,
          "lon": -118.03886799999998
        }
      },
      {
        "key": "1902602123",
        "legal_name": "Twin Palms Recovery Center",
        "name": "Twin Palms Recovery Center",
        "address": "218 North Glendora Avenue",
        "city_state_zip": "City of Industry, CA 91744",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Lorena Hurtado",
        "phone": "(626) 968-8875",
        "fax": "(626) 968-4565",
        "url": "www.twinpalmsrc.org",
        "position": "34.0222711, -117.9528431",
        "lat": 34.0222711,
        "lng": -117.9528431,
        "location": {
          "lat": 34.0222711,
          "lon": -117.9528431
        }
      },
      {
        "key": "1902801100",
        "legal_name": "A Los Angeles Driver Education Center",
        "name": "A-LA Driver Education Center",
        "address": "147 North San Vicente Boulevard",
        "city_state_zip": "Beverly Hills, CA 90211",
        "programs": "First Offender",
        "contact": "Dan Haynesworth",
        "phone": "(213) 388-7135",
        "fax": "(323) 655-1934",
        "email_contact": "ladrivered@sbcglobal.net",
        "position": "34.0679525, -118.37487440000001",
        "lat": 34.0679525,
        "lng": -118.37487440000001,
        "location": {
          "lat": 34.0679525,
          "lon": -118.37487440000001
        }
      },
      {
        "key": "1902901100",
        "legal_name": "Alhambra Safety Services",
        "name": "Alhambra Safety Services",
        "address": "926 E. Garvey Avenue, Suite A",
        "city_state_zip": "Monterey Park, CA 91755",
        "programs": "First Offender",
        "contact": "Nancy Wu",
        "phone": "(626) 571-6988",
        "fax": "(626) 571-2477",
        "email_contact": "",
        "position": "34.0624985, -118.11002630000002",
        "lat": 34.0624985,
        "lng": -118.11002630000002,
        "location": {
          "lat": 34.0624985,
          "lon": -118.11002630000002
        }
      },
      {
        "key": "1903001100",
        "legal_name": "Avalon-Carver Community Center",
        "name": "Avalon-Carver AB 541 DDP",
        "address": "4920 South Avalon Boulevard",
        "city_state_zip": "Los Angeles, CA 90011",
        "programs": "First Offender",
        "contact": "Martha Nelson",
        "phone": "(323) 232-4391",
        "fax": "(323) 234-1008",
        "url": "www.avalon-carver.org",
        "position": "33.9981173, -118.2648304",
        "lat": 33.9981173,
        "lng": -118.2648304,
        "location": {
          "lat": 33.9981173,
          "lon": -118.2648304
        }
      },
      {
        "key": "1903101100",
        "legal_name": "Behavioral Health Services, Inc.",
        "name": "Behavioral Health Services, Inc.",
        "address": "15519 Crenshaw Boulevard",
        "city_state_zip": "Gardena, CA 90249",
        "programs": "First Offender",
        "contact": "Sabrina Navarette",
        "phone": "(310) 679-9031",
        "fax": "(310) 679-9084",
        "url": "www.bhs-inc.org",
        "position": "33.889415, -118.32695390000003",
        "lat": 33.889415,
        "lng": -118.32695390000003,
        "location": {
          "lat": 33.889415,
          "lon": -118.32695390000003
        }
      },
      {
        "key": "1903102100",
        "legal_name": "Behavioral Health Services, Inc.",
        "name": "Behavioral Health Services, Inc.",
        "address": "1318A North Avalon Boulevard",
        "city_state_zip": "Wilmington, CA 90744",
        "programs": "marytai@gmail.com",
        "contact": "Yvette Parra",
        "phone": "(310) 549-2710",
        "fax": "(310) 549-2715",
        "url": "www.bhs-inc.org",
        "position": "33.7894386, -118.26267150000001",
        "lat": 33.7894386,
        "lng": -118.26267150000001,
        "location": {
          "lat": 33.7894386,
          "lon": -118.26267150000001
        }
      },
      {
        "key": "1903501100",
        "legal_name": "Dial Education Center, Inc.",
        "name": "Dial Alcohol & Drug Education Center",
        "address": "6306 York Boulevard",
        "city_state_zip": "Highland Park, CA 90042",
        "mailing_address": "3460 Wilshire Boulevard, Suite 2 02",
        "mailing_city_state_zip": "Los Angeles, CA 90010",
        "programs": "First Offender",
        "contact": "Won Lee",
        "phone": "(888) 446-6222",
        "fax": "(213) 384-3144",
        "url": "dialeducation@yahoo.com",
        "position": "34.1142576, -118.18248410000001",
        "lat": 34.1142576,
        "lng": -118.18248410000001,
        "location": {
          "lat": 34.1142576,
          "lon": -118.18248410000001
        }
      },
      {
        "key": "1903502100",
        "legal_name": "Dial Education Center, Inc.",
        "name": "Dial  Alcohol & Drug Education Center",
        "address": "4325 W. Sunset Boulevard, Suite 209",
        "city_state_zip": "Los Angeles, CA 90029",
        "mailing_address": "3460 Wilshire Boulevard, Suite 202",
        "mailing_city_state_zip": "Los Angeles, CA 90010",
        "programs": "First Offender",
        "contact": "Won Lee",
        "phone": "(888) 446-6222",
        "fax": "(213) 384-3144",
        "url": "dialeducation@yahoo.com",
        "position": "34.0952644, -118.28295309999999",
        "lat": 34.0952644,
        "lng": -118.28295309999999,
        "location": {
          "lat": 34.0952644,
          "lon": -118.28295309999999
        }
      },
      {
        "key": "1903503100",
        "legal_name": "Dial Education Center, Inc.",
        "name": "Dial Alcohol &  Drug Education Center",
        "address": "11631 Victory Boulevard, Suite 104",
        "city_state_zip": "North Hollywood, CA 91606",
        "mailing_address": "3460 Wilshire Boulevard, Suite 202",
        "mailing_city_state_zip": "Los Angeles, CA 90010",
        "programs": "First Offender",
        "contact": "Won Lee",
        "phone": "(888) 446-6222",
        "fax": "(213) 384-3144",
        "url": "dialeducation@yahoo.com",
        "position": "34.1870297, -118.38558560000001",
        "lat": 34.1870297,
        "lng": -118.38558560000001,
        "location": {
          "lat": 34.1870297,
          "lon": -118.38558560000001
        }
      },
      {
        "key": "1903504100",
        "legal_name": "Dial Education Center, Inc.",
        "name": "Dial Alcohol & Drug Education Center",
        "address": "3460 Wilshire Boulevard, Suite  202",
        "city_state_zip": "Los Angeles, CA 90010",
        "programs": "First Offender",
        "contact": "Won Lee",
        "phone": "(888) 446-6222",
        "fax": "(213) 384-3144",
        "url": "dialeducation@yahoo.com",
        "position": "34.0613055, -118.3000389",
        "lat": 34.0613055,
        "lng": -118.3000389,
        "location": {
          "lat": 34.0613055,
          "lon": -118.3000389
        }
      },
      {
        "key": "1904001100",
        "legal_name": "Fred Kennedy  Associates, Inc.",
        "name": "Fred Kennedy  Associates, Inc.",
        "address": "1931 North Gaffey Street, Suite  D",
        "city_state_zip": "San Pedro, CA 90731",
        "programs": "First Offender",
        "contact": "Aaron S. Watkins",
        "phone": "(310) 521-1263",
        "fax": "(310) 514-9941",
        "email_contact": "awatkins@aers.us",
        "position": "33.7621037, -118.29367669999999",
        "lat": 33.7621037,
        "lng": -118.29367669999999,
        "location": {
          "lat": 33.7621037,
          "lon": -118.29367669999999
        }
      },
      {
        "key": "1904002100",
        "legal_name": "Fred Kennedy  Associates, Inc.",
        "name": "Fred Kennedy  Associates, Inc.",
        "address": "17420  South Avalon Boulevard, Suite 210",
        "city_state_zip": "Carson, CA 90746",
        "programs": "First Offender",
        "contact": "Aaron S. Watkins",
        "phone": "(310) 532-0620",
        "fax": "(310) 532-3293",
        "email_contact": "awatkins@aers.us",
        "position": "33.8727522, -118.26536599999997",
        "lat": 33.8727522,
        "lng": -118.26536599999997,
        "location": {
          "lat": 33.8727522,
          "lon": -118.26536599999997
        }
      },
      {
        "key": "1904101100",
        "legal_name": "Lewis Professional Services,  Inc.",
        "name": "Inglewood Substance  Abuse  Traffic Violators Ag ency",
        "address": "400 South La Brea A venue, Suite 203",
        "city_state_zip": "Inglewood, CA 90301",
        "programs": "First Offender",
        "contact": "Maria Sanchez",
        "phone": "(310) 673-5882",
        "fax": "(310) 673-5904",
        "url": "www.lewisprofessional.com",
        "position": "33.9592825, -118.35302000000001",
        "lat": 33.9592825,
        "lng": -118.35302000000001,
        "location": {
          "lat": 33.9592825,
          "lon": -118.35302000000001
        }
      },
      {
        "key": "1904201100",
        "legal_name": "Kim’s Driving School",
        "name": "Kim’s Driving School",
        "address": "3306 Venice Boulevard",
        "city_state_zip": "Los Angeles, CA 90019",
        "programs": "First Offender",
        "contact": "Emanuel Y. Kim",
        "phone": "(323) 731-0833",
        "fax": "(323) 731-0319",
        "email_contact": "",
        "position": "34.0433476, -118.32038210000002",
        "lat": 34.0433476,
        "lng": -118.32038210000002,
        "location": {
          "lat": 34.0433476,
          "lon": -118.32038210000002
        }
      },
      {
        "key": "1904301100",
        "legal_name": "Korean Community Services, Inc.",
        "name": "Korean Community Services, Inc.",
        "address": "4416 Beverly Boulevard",
        "city_state_zip": "Los Angeles, CA 90004",
        "mailing_address": "8633 Knott Avenue",
        "mailing_city_state_zip": "Buena Park, CA 90620",
        "programs": "First Offender",
        "contact": "Efren Guerrero",
        "phone": "(323) 668-9007",
        "fax": "(714) 527-6563",
        "url": "www.kcservices.org",
        "position": "34.0760417, -118.30502849999999",
        "lat": 34.0760417,
        "lng": -118.30502849999999,
        "location": {
          "lat": 34.0760417,
          "lon": -118.30502849999999
        }
      },
      {
        "key": "1904501100",
        "legal_name": "Anderson Counseling & Education, Inc.",
        "name": "A.C.E. Program",
        "address": "7336 South Painter  Avenue",
        "city_state_zip": "Whittier, CA 90602",
        "programs": "First Offender",
        "contact": "Bret Anderson",
        "phone": "(562) 945-2977",
        "fax": "(562) 945-2978",
        "email_contact": "",
        "position": "33.9743608, -118.03240010000002",
        "lat": 33.9743608,
        "lng": -118.03240010000002,
        "location": {
          "lat": 33.9743608,
          "lon": -118.03240010000002
        }
      },
      {
        "key": "1904601100",
        "legal_name": "Rehabilitation Alcohol Program Corporation",
        "name": "Rehabilitation Alcohol Program, Inc.",
        "address": "2055 North Garey Avenue, Suite 2",
        "city_state_zip": "Pomona, CA 91767",
        "programs": "emanuelkim814@hotmail.com",
        "contact": "Christine Kesse",
        "phone": "(909) 596-5335",
        "fax": "(909) 593-4865",
        "email_contact": "rap4recovery@hotmail.com",
        "position": "34.0846453, -117.75261069999999",
        "lat": 34.0846453,
        "lng": -117.75261069999999,
        "location": {
          "lat": 34.0846453,
          "lon": -117.75261069999999
        }
      },
      {
        "key": "1904701100",
        "legal_name": "San Gabriel  Valley Driver Improvement",
        "name": "San  Gabriel Valley Driver Improvement",
        "address": "25 South Raymond Avenue, Suite 112",
        "city_state_zip": "Alhambra, CA 91801",
        "mailing_address": "1700 West Cameron  Avenue, Suite 108",
        "mailing_city_state_zip": "West Covina, CA 91790",
        "programs": "First Offender",
        "contact": "Ramon Beltran",
        "phone": "(626) 960-0644",
        "fax": "(626) 960-0645",
        "email_contact": "sgvdi@yahoo.com",
        "position": "34.0904684, -118.14518759999999",
        "lat": 34.0904684,
        "lng": -118.14518759999999,
        "location": {
          "lat": 34.0904684,
          "lon": -118.14518759999999
        }
      },
      {
        "key": "1904702100",
        "legal_name": "San Gabriel  Valley Driver Improvement",
        "name": "San  Gabriel Valley Driver Improvement",
        "address": "1700 West Cameron  Avenue, Suite 110",
        "city_state_zip": "West Covina, CA 91790",
        "programs": "First Offender",
        "contact": "Ramon Beltran",
        "phone": "(626) 960-0644",
        "fax": "(626) 960-0645",
        "email_contact": "sgvdi@yahoo.com",
        "position": "34.0695185, -117.94396360000002",
        "lat": 34.0695185,
        "lng": -117.94396360000002,
        "location": {
          "lat": 34.0695185,
          "lon": -117.94396360000002
        }
      },
      {
        "key": "1904901100",
        "legal_name": "Casa De Hermandad",
        "name": "WAOC –  Casa De Hermandad",
        "address": "11750 West Pico  Boulevard",
        "city_state_zip": "Los Angeles, CA 90064",
        "programs": "First Offender",
        "contact": "David Abelar",
        "phone": "(310) 477-8272",
        "fax": "(310) 473-9591",
        "url": "info@westareaopportunitycenter.org",
        "position": "34.0309796, -118.4465525",
        "lat": 34.0309796,
        "lng": -118.4465525,
        "location": {
          "lat": 34.0309796,
          "lon": -118.4465525
        }
      },
      {
        "key": "1905101100",
        "legal_name": "W  &  G Enterprises, Inc.",
        "name": "Alcohol Education and Recovery Center",
        "address": "1355 Redondo Avenue, Suite 2",
        "city_state_zip": "Long Beach, CA 90804",
        "programs": "First Offender",
        "contact": "Aaron S. Watkins",
        "phone": "(562) 986-5046",
        "fax": "(562) 986-5048",
        "email_contact": "awatkins@aerc.us",
        "position": "33.7837055, -118.15274650000003",
        "lat": 33.7837055,
        "lng": -118.15274650000003,
        "location": {
          "lat": 33.7837055,
          "lon": -118.15274650000003
        }
      },
      {
        "key": "1905301100",
        "legal_name": "Diversion Safety Program, Inc.",
        "name": "Diversion Safety Program",
        "address": "6606 Pacific Boulevard, Suite 215",
        "city_state_zip": "Huntington  Park, CA  90255",
        "programs": "First Offender",
        "contact": "Dolores Gonzalez",
        "phone": "(323) 585-0764",
        "fax": "(323) 585-4240",
        "email_contact": "abpc1000@aol.com",
        "position": "33.9789709, -118.22475859999997",
        "lat": 33.9789709,
        "lng": -118.22475859999997,
        "location": {
          "lat": 33.9789709,
          "lon": -118.22475859999997
        }
      },
      {
        "key": "1905401100",
        "legal_name": "Escuela Latina De East Los Angeles, Inc.",
        "name": "Escuela Hispana de Alcohol",
        "address": "4532 East Whittier Boulevard, Suite 210",
        "city_state_zip": "East Los Angeles, CA  90022",
        "programs": "First Offender",
        "contact": "Dolores Gonzalez",
        "phone": "(323) 264-7001",
        "fax": "(323) 264-8212",
        "email_contact": "escuelaela32@att.net",
        "position": "34.022875, -118.16995329999997",
        "lat": 34.022875,
        "lng": -118.16995329999997,
        "location": {
          "lat": 34.022875,
          "lon": -118.16995329999997
        }
      },
      {
        "key": "1905601100",
        "legal_name": "California Diversion Programs, Inc.",
        "name": "A-1 Canoga Park Budget/Escuela Popular Hispana",
        "address": "21054  Sherman Way,  Suite 205",
        "city_state_zip": "Canoga Park, CA 91303",
        "programs": "First Offender",
        "contact": "Amanda Valdez",
        "phone": "(818) 716-0188",
        "fax": "(818) 716-1560",
        "email_contact": "av@cadip.com",
        "position": "34.2007788, -118.59256909999999",
        "lat": 34.2007788,
        "lng": -118.59256909999999,
        "location": {
          "lat": 34.2007788,
          "lon": -118.59256909999999
        }
      },
      {
        "key": "1905701100",
        "legal_name": "Driver Safety  Awareness Program, Inc.",
        "name": "Driver Safety  Awareness Program,  Inc.",
        "address": "16909 Parthenia Street, Suite 103",
        "city_state_zip": "North Hills, CA 91343",
        "programs": "First Offender",
        "contact": "ReNee Warren",
        "phone": "(818) 830-8870",
        "fax": "(818) 830-8873",
        "email_contact": "dsap@ymail.com",
        "position": "34.2290348, -118.50070529999999",
        "lat": 34.2290348,
        "lng": -118.50070529999999,
        "location": {
          "lat": 34.2290348,
          "lon": -118.50070529999999
        }
      },
      {
        "key": "1905801100",
        "legal_name": "DUI Program of SFV",
        "name": "DUI Program SFV",
        "address": "7120 Topanga Canyon Boulevard",
        "city_state_zip": "Canoga Park, CA 91303",
        "programs": "First Offender",
        "contact": "Wendie Warwick",
        "phone": "(818) 992-0460",
        "fax": "(818) 992-0462",
        "email_contact": "",
        "position": "34.1998527, -118.60564119999998",
        "lat": 34.1998527,
        "lng": -118.60564119999998,
        "location": {
          "lat": 34.1998527,
          "lon": -118.60564119999998
        }
      },
      {
        "key": "1905901100",
        "legal_name": "Adapt-Aware Zone, Inc.",
        "name": "Adapt Programs, Inc.",
        "address": "143 S. Glendale Avenue, Suite 103",
        "city_state_zip": "Glendale, CA 91205",
        "programs": "First Offender",
        "contact": "Grace Lewitt",
        "phone": "(818) 243-2746",
        "fax": "(818) 253-3841",
        "email_contact": "adaptglendale@sbcglobal.net",
        "position": "34.1449424, -118.24819509999998",
        "lat": 34.1449424,
        "lng": -118.24819509999998,
        "location": {
          "lat": 34.1449424,
          "lon": -118.24819509999998
        }
      },
      {
        "key": "1905902100",
        "legal_name": "Adapt-Aware Zone, Inc.",
        "name": "Adapt Programs, Inc.",
        "address": "13211 Whittier Boulevard, Unit H",
        "city_state_zip": "Whittier, CA 90602",
        "programs": "First Offender",
        "contact": "Grace Lewitt",
        "phone": "(562) 698-0474",
        "fax": "(562) 698-4677",
        "email_contact": "adaptwhittier@verizon.net",
        "position": "33.965001, -118.034537",
        "lat": 33.965001,
        "lng": -118.034537,
        "location": {
          "lat": 33.965001,
          "lon": -118.034537
        }
      },
      {
        "key": "1906001123",
        "legal_name": "Shields for Families",
        "name": "Place of Family",
        "address": "9307 S. Central Avenue",
        "city_state_zip": "Los Angeles, CA 90002",
        "mailing_address": "P.O. Box 59129",
        "mailing_city_state_zip": "Los Angeles, CA 90059",
        "programs": "eccentricww@aol.com",
        "contact": "Katherine Icenhower",
        "phone": "(323) 564-6982",
        "fax": "(323) 564-5970",
        "url": "www.shieldforfamilies.org",
        "position": "33.9514097, -118.25556899999998",
        "lat": 33.9514097,
        "lng": -118.25556899999998,
        "location": {
          "lat": 33.9514097,
          "lon": -118.25556899999998
        }
      },
      {
        "key": "2000101120",
        "legal_name": "Kings View",
        "name": "Kings View Community Services",
        "address": "125 South D Street, Suite 101",
        "city_state_zip": "Madera, CA 93638",
        "mailing_address": "1410 F Street, Suite101",
        "mailing_city_state_zip": "Fresno, CA  93706",
        "programs": "First Offender/18 Month",
        "contact": "Jennifer Montgomery",
        "phone": "(559) 673-8006",
        "fax": "(559) 673-0267",
        "url": "www.kingsview.org",
        "email_contact": "jmontgomery@kingsview.ort",
        "position": "36.9620858, -120.05741109999997",
        "lat": 36.9620858,
        "lng": -120.05741109999997,
        "location": {
          "lat": 36.9620858,
          "lon": -120.05741109999997
        }
      },
      {
        "key": "2000102120",
        "legal_name": "Kings View",
        "name": "Kings View Community Services",
        "address": "49269 Golden Oak Drive, Suite 204-B",
        "city_state_zip": "Oakhurst, CA 93644",
        "mailing_address": "1410 F Street, Suite101",
        "mailing_city_state_zip": "Fresno, CA  93706",
        "programs": "First Offender/18 Month",
        "contact": "Jennifer Montgomery",
        "phone": "(559)  641-2805",
        "fax": "(559) 641-2807",
        "url": "www.kingsview.org",
        "email_contact": "jmontgomery@kingsview.ort",
        "position": "37.3319151, -119.64918829999999",
        "lat": 37.3319151,
        "lng": -119.64918829999999,
        "location": {
          "lat": 37.3319151,
          "lon": -119.64918829999999
        }
      },
      {
        "key": "2100101120",
        "legal_name": "Bay  Area Community Resources, Inc.",
        "name": "Bay Area  Community Resources",
        "address": "103 Shoreline Parkway, Suite 201",
        "city_state_zip": "San Rafael, CA 94901",
        "programs": "First Offender/18 Month",
        "contact": "Kevin O’Reilly",
        "phone": "(415) 453-9980",
        "fax": "(415) 453-6137",
        "url": "www.bacr.org",
        "position": "37.9520004, -122.49372820000002",
        "lat": 37.9520004,
        "lng": -122.49372820000002,
        "location": {
          "lat": 37.9520004,
          "lon": -122.49372820000002
        }
      },
      {
        "key": "2200301120",
        "legal_name": "Kings View",
        "name": "Kings View Community Services",
        "address": "5176 Hwy 140",
        "city_state_zip": "Mariposa,  CA 95338",
        "mailing_address": "1410 F Street, Suite 101",
        "mailing_city_state_zip": "Fresno, CA 93706",
        "programs": "First Offender/18 Month",
        "contact": "Jennifer Montgomery",
        "phone": "(209) 742-6868",
        "fax": "(209) 742-6878",
        "url": "www.kingsview.org",
        "position": "37.4934875, -119.97263759999998",
        "lat": 37.4934875,
        "lng": -119.97263759999998,
        "location": {
          "lat": 37.4934875,
          "lon": -119.97263759999998
        }
      },
      {
        "key": "2300101120",
        "legal_name": "North Coast Drivers,  Inc.",
        "name": "Lucky Deuce DUI/DDP",
        "address": "55 W.  Mendocino Avenue",
        "city_state_zip": "Willits, CA 95490",
        "mailing_address": "221-E North Main  Street",
        "mailing_city_state_zip": "Fort Bragg, CA 95437",
        "programs": "First Offender/18 Month",
        "contact": "Deborah Bartlett",
        "phone": "(707) 459-9431",
        "fax": "(707) 456-0145",
        "email_contact": "luckydeuce2@att.net",
        "position": "39.4112054, -123.35526620000002",
        "lat": 39.4112054,
        "lng": -123.35526620000002,
        "location": {
          "lat": 39.4112054,
          "lon": -123.35526620000002
        }
      },
      {
        "key": "2300102120",
        "legal_name": "North Coast Drivers,  Inc.",
        "name": "Lucky Deuce DUI/DDP",
        "address": "221-E North Main  Street",
        "city_state_zip": "Fort Bragg, CA 95437",
        "programs": "First Offender/18 Month",
        "contact": "Deborah Bartlett",
        "phone": "(707) 964-1001",
        "fax": "(707) 964-1246",
        "email_contact": "luckydeuce2@att.net",
        "position": "39.4433795, -123.80615160000002",
        "lat": 39.4433795,
        "lng": -123.80615160000002,
        "location": {
          "lat": 39.4433795,
          "lon": -123.80615160000002
        }
      },
      {
        "key": "2300103120",
        "legal_name": "North Coast Drivers, Inc.",
        "name": "Lucky Deuce DUI/DDP",
        "address": "516 South State Street",
        "city_state_zip": "Ukiah, CA 95482",
        "mailing_address": "221-E North Main Street",
        "mailing_city_state_zip": "Fort Bragg, CA 95437",
        "programs": "First Offender/18 Month",
        "contact": "Deborah Bartlett",
        "phone": "(707) 459-9431",
        "fax": "(707) 485-1267",
        "email_contact": "",
        "position": "39.1464911, -123.20718149999999",
        "lat": 39.1464911,
        "lng": -123.20718149999999,
        "location": {
          "lat": 39.1464911,
          "lon": -123.20718149999999
        }
      },
      {
        "key": "2300301123",
        "legal_name": "Round Valley Indian Health Center, Inc.",
        "name": "Round Valley Indian Health Center",
        "address": "23000 Henderson Road",
        "city_state_zip": "Covelo, CA 95428",
        "mailing_address": "P.O. Box 247",
        "mailing_city_state_zip": "Covelo, CA 95428",
        "programs": "luckydeuce2@att.net",
        "contact": "Otis Brotherton",
        "phone": "(707) 983-6648",
        "email_contact": "Otis.Brotherton@rvihc.com",
        "position": "39.80535, -123.268124",
        "lat": 39.80535,
        "lng": -123.268124,
        "location": {
          "lat": 39.80535,
          "lon": -123.268124
        }
      },
      {
        "key": "2400101120",
        "legal_name": "Lifestyle Management Drydock, Inc.",
        "name": "Drydock DDP",
        "address": "710 West  18th  Street, Suite  14",
        "city_state_zip": "Merced, CA 95340",
        "programs": "First Offender/18 Month",
        "contact": "Margie Loza",
        "phone": "(209) 383-7797",
        "fax": "(209) 383-7538",
        "email_contact": "lsmdrydock2@sbcglobal.net",
        "position": "37.3033644, -120.48624640000003",
        "lat": 37.3033644,
        "lng": -120.48624640000003,
        "location": {
          "lat": 37.3033644,
          "lon": -120.48624640000003
        }
      },
      {
        "key": "2400102120",
        "legal_name": "Lifestyle Management Drydock, Inc.",
        "name": "Lifestyle Management Drydock IV, Inc.",
        "address": "935 I Street, Suite B",
        "city_state_zip": "Los  Banos, CA 93635",
        "programs": "First Offender/18 Month",
        "contact": "Margie Loza",
        "phone": "(209) 827-3140",
        "fax": "(209) 826-4077",
        "email_contact": "lewissteele1385@comcast.net",
        "position": "37.058588, -120.84275100000002",
        "lat": 37.058588,
        "lng": -120.84275100000002,
        "location": {
          "lat": 37.058588,
          "lon": -120.84275100000002
        }
      },
      {
        "key": "2500301120",
        "legal_name": "Michael W.  Hudson",
        "name": "Hudson Solutions",
        "address": "204 West  12th  Street, Suite 4",
        "city_state_zip": "Alturas, CA 96101",
        "mailing_address": "PO Box  1652",
        "mailing_city_state_zip": "Alturas, CA  96101",
        "programs": "First Offender/18 Month",
        "contact": "Michael W.  Hudson",
        "phone": "(530) 233-9619",
        "fax": "(530) 233-9620",
        "url": "www.hudsonsolutions.org",
        "position": "41.4947603, -120.54442589999996",
        "lat": 41.4947603,
        "lng": -120.54442589999996,
        "location": {
          "lat": 41.4947603,
          "lon": -120.54442589999996
        }
      },
      {
        "key": "2600101120",
        "legal_name": "Mono County Alcohol And Drug Programs",
        "name": "Mono County DDP",
        "address": "452 Old Mammoth Road, Sierra Center Mall, 3",
        "city_state_zip": "Mammoth Lakes, CA  93546",
        "mailing_address": "PO Box 2619",
        "mailing_city_state_zip": "Mammoth Lakes, CA 93546",
        "programs": "First Offender/18 Month",
        "contact": "Debra Stewart",
        "phone": "(760) 924-1740",
        "fax": "(760) 924-1741  rd Floo r",
        "url": "www.monocounty.ca.gov",
        "position": "37.6396232, -118.96701250000001",
        "lat": 37.6396232,
        "lng": -118.96701250000001,
        "location": {
          "lat": 37.6396232,
          "lon": -118.96701250000001
        }
      },
      {
        "key": "2700401120",
        "legal_name": "Sun Street Centers",
        "name": "Sun Street Centers",
        "address": "11 Peach Drive",
        "city_state_zip": "Salinas, CA 93901",
        "programs": "First Offender/18 Month",
        "contact": "Sun Street  Centers",
        "phone": "(831)753-5140",
        "fax": "(831) 753-5163",
        "url": "www.sunstreetcenters.org",
        "position": "36.680231, -121.64775550000002",
        "lat": 36.680231,
        "lng": -121.64775550000002,
        "location": {
          "lat": 36.680231,
          "lon": -121.64775550000002
        }
      },
      {
        "key": "2700402120",
        "legal_name": "Sun Street Centers",
        "name": "Sun Street Centers",
        "address": "1760 Fremont Boulevard, E#1-2",
        "city_state_zip": "Seaside, CA 93955",
        "mailing_address": "11 Peach  Drive",
        "mailing_city_state_zip": "Salinas, CA 93901",
        "programs": "First Offender/18 Month",
        "contact": "Marciano Huerta",
        "phone": "(831) 393-9316",
        "fax": "(831) 899-6565",
        "url": "www.sunstreetcenters.org",
        "position": "36.6134858, -121.8425595",
        "lat": 36.6134858,
        "lng": -121.8425595,
        "location": {
          "lat": 36.6134858,
          "lon": -121.8425595
        }
      },
      {
        "key": "2700403120",
        "legal_name": "Sun Street Centers",
        "name": "Sun Street Centers",
        "address": "2167 H De La Rosa Sr. Street",
        "city_state_zip": "Soledad, CA 93960-3381",
        "programs": "First Offender/18 Month",
        "contact": "Marciano Huerta",
        "phone": "(831) 753-5140",
        "fax": "(831) 385-6842",
        "url": "www.sunstreetcenters.org",
        "position": "36.4165913, -121.320063",
        "lat": 36.4165913,
        "lng": -121.320063,
        "location": {
          "lat": 36.4165913,
          "lon": -121.320063
        }
      },
      {
        "key": "2800201120",
        "legal_name": "Bay  Area Community Resources, Inc.",
        "name": "Napa County DUI Program",
        "address": "2020 Jefferson Street",
        "city_state_zip": "Napa, CA 94559",
        "programs": "First Offender/18 Month",
        "contact": "Nancy Carter",
        "phone": "(707) 255-8300",
        "fax": "(707) 255-2016",
        "url": "www.bacr.org",
        "position": "38.3059503, -122.2947557",
        "lat": 38.3059503,
        "lng": -122.2947557,
        "location": {
          "lat": 38.3059503,
          "lon": -122.2947557
        }
      },
      {
        "key": "2900101120",
        "legal_name": "Community Recovery  Resources, Inc.",
        "name": "Community Recovery Resources",
        "address": "180 Sierra College Drive",
        "city_state_zip": "Grass Valley, CA 95945",
        "mailing_address": "P.O. Box 6028",
        "mailing_city_state_zip": "Auburn, CA  95604",
        "programs": "First Offender/18 Month",
        "contact": "Jeff Jones",
        "phone": "(530) 273-9541",
        "fax": "(530) 273-7740",
        "url": "www.corr.us",
        "position": "39.233962, -121.0510567",
        "lat": 39.233962,
        "lng": -121.0510567,
        "location": {
          "lat": 39.233962,
          "lon": -121.0510567
        }
      },
      {
        "key": "2900102120",
        "legal_name": "Community Recovery Resources, Inc.",
        "name": "Community Recovery Resources",
        "address": "10015 Palisades Drive, Suite 1",
        "city_state_zip": "Truckee, CA 96161",
        "mailing_address": "P.O. Box 6028",
        "mailing_city_state_zip": "Auburn, CA  95604",
        "programs": "First Offender/18 Month",
        "contact": "Sue Smith",
        "phone": "(530) 587-8194",
        "fax": "(530) 587-5617",
        "url": "www.corr.us",
        "position": "39.32578669999999, -120.17671059999998",
        "lat": 39.32578669999999,
        "lng": -120.17671059999998,
        "location": {
          "lat": 39.32578669999999,
          "lon": -120.17671059999998
        }
      },
      {
        "key": "3000101020",
        "legal_name": "School Ten Inc.",
        "name": "School Ten, Inc.",
        "address": "1136-B North Gilbert Street",
        "city_state_zip": "Anaheim, CA 92801",
        "programs": "18 Month",
        "contact": "Teresa Saucedo",
        "phone": "(714) 772-3620",
        "fax": "(714) 490-6133",
        "url": "www.schoolteninc.com",
        "position": "33.8485261, -117.96739609999997",
        "lat": 33.8485261,
        "lng": -117.96739609999997,
        "location": {
          "lat": 33.8485261,
          "lon": -117.96739609999997
        }
      },
      {
        "key": "3000102020",
        "legal_name": "School Ten Inc.",
        "name": "School Ten, Inc.",
        "address": "2384 East Orangethorpe Avenue",
        "city_state_zip": "Anaheim, CA 92806",
        "programs": "18 Month",
        "contact": "Andrea Soto",
        "phone": "(714) 871-9460",
        "fax": "(714) 871-5067",
        "url": "www.schoolteninc.com",
        "position": "33.8596486, -117.88386489999999",
        "lat": 33.8596486,
        "lng": -117.88386489999999,
        "location": {
          "lat": 33.8596486,
          "lon": -117.88386489999999
        }
      },
      {
        "key": "300103020",
        "legal_name": "School Ten Inc.",
        "name": "School Ten, Inc.",
        "address": "9555 Garfield Avenue, J",
        "city_state_zip": "Fountain Valley, CA 92708",
        "programs": "18 Month",
        "contact": "Gilbert Flores",
        "phone": "(714) 964-1412",
        "fax": "(714) 964-2862",
        "url": "www.schoolteninc.com",
        "position": "33.68741480000001, -117.96216240000001",
        "lat": 33.68741480000001,
        "lng": -117.96216240000001,
        "location": {
          "lat": 33.68741480000001,
          "lon": -117.96216240000001
        }
      },
      {
        "key": "3000104020",
        "legal_name": "School Ten Inc.",
        "name": "School Ten, Inc.",
        "address": "1772 South Main Street",
        "city_state_zip": "Santa Ana, CA 92707",
        "programs": "18 Month",
        "contact": "Silvia Olivares",
        "phone": "(714) 547-7571",
        "fax": "(714) 547-0774",
        "url": "www.schoolteninc.com",
        "position": "33.7243898, -117.86794040000001",
        "lat": 33.7243898,
        "lng": -117.86794040000001,
        "location": {
          "lat": 33.7243898,
          "lon": -117.86794040000001
        }
      },
      {
        "key": "3000105120",
        "legal_name": "School Ten Inc.",
        "name": "School Ten, Inc.",
        "address": "6156 Garden Grove Boulevard",
        "city_state_zip": "Westminster, CA 92683",
        "programs": "First Offender/18 Month",
        "contact": "Service",
        "phone": "(714) 891-3608",
        "fax": "(714) 897-4425",
        "url": "www.schoolteninc.com",
        "position": "33.7733722, -118.02202160000002",
        "lat": 33.7733722,
        "lng": -118.02202160000002,
        "location": {
          "lat": 33.7733722,
          "lon": -118.02202160000002
        }
      },
      {
        "key": "3000106020",
        "legal_name": "School Ten Inc.",
        "name": "School Ten, Inc.",
        "address": "1111 Town and Country, Suite 25",
        "city_state_zip": "Orange, CA 92868",
        "programs": "18 Month",
        "contact": "Maria Falcon",
        "phone": "(714) 550-0988",
        "fax": "(714) 550-9464",
        "url": "www.schoolteninc.com",
        "position": "33.7773829, -117.86429379999998",
        "lat": 33.7773829,
        "lng": -117.86429379999998,
        "location": {
          "lat": 33.7773829,
          "lon": -117.86429379999998
        }
      },
      {
        "key": "3000201020",
        "legal_name": "Gold Coast Counseling Center, Incorporated",
        "name": "Gold Coast Counseling Center, Inc.",
        "address": "2950 Airway Avenue, Suite B3",
        "city_state_zip": "Costa Mesa, CA 92626",
        "programs": "18 Month",
        "contact": "Pete DeLuca",
        "phone": "(714) 641-0532",
        "fax": "(714) 754-7644",
        "url": "www.goldcoastdui.com",
        "position": "33.6684612, -117.87630560000002",
        "lat": 33.6684612,
        "lng": -117.87630560000002,
        "location": {
          "lat": 33.6684612,
          "lon": -117.87630560000002
        }
      },
      {
        "key": "3000202020",
        "legal_name": "Gold Coast Counseling Center, Incorporated",
        "name": "Gold Coast Counseling Center, Inc.",
        "address": "26941 Cabot Road, Suite 129",
        "city_state_zip": "Laguna Hills, CA 92653",
        "programs": "18 Month",
        "contact": "Pete DeLuca",
        "phone": "(949) 347-8885",
        "fax": "(949) 716-6035",
        "url": "www.goldocastdui.com",
        "position": "33.5708155, -117.67479359999999",
        "lat": 33.5708155,
        "lng": -117.67479359999999,
        "location": {
          "lat": 33.5708155,
          "lon": -117.67479359999999
        }
      },
      {
        "key": "3000203020",
        "legal_name": "Gold Coast Counseling Center, Incorporated",
        "name": "Gold Coast Counseling Center, Inc.",
        "address": "1901 Newport Boulevard, Suite 151",
        "city_state_zip": "Costa Mesa, CA 92627",
        "programs": "18 Month",
        "contact": "Pete DeLuca",
        "phone": "(949) 722-0893",
        "fax": "(949) 722-0894",
        "url": "www.goldcoastdui.com",
        "position": "33.6441315, -117.91693670000001",
        "lat": 33.6441315,
        "lng": -117.91693670000001,
        "location": {
          "lat": 33.6441315,
          "lon": -117.91693670000001
        }
      },
      {
        "key": "3000301120",
        "legal_name": "Academy Of Defensive Driving, Inc.",
        "name": "Academy Of Defensive Driving, Inc.",
        "address": "31726 Rancho Viejo Road, Suite 120",
        "city_state_zip": "San Juan Capistrano, CA 92675",
        "programs": "First Offender/18 Month",
        "contact": "Ramon Hernandez",
        "phone": "(949) 240-0115",
        "fax": "(949)443-5018",
        "url": "www.aodd.com",
        "position": "33.5030809, -117.65270499999997",
        "lat": 33.5030809,
        "lng": -117.65270499999997,
        "location": {
          "lat": 33.5030809,
          "lon": -117.65270499999997
        }
      },
      {
        "key": "3000302100",
        "legal_name": "Academy Of Defensive Driving, Inc.",
        "name": "Academy Of Defensive Driving, Inc.",
        "address": "2028 Quail Street",
        "city_state_zip": "Newport Beach, CA 92660",
        "programs": "First Offender",
        "contact": "Rocio Rodriguez",
        "phone": "(949) 752-0710",
        "fax": "(949) 752-0705",
        "url": "www.aodd.com",
        "position": "33.6643598, -117.87175009999999",
        "lat": 33.6643598,
        "lng": -117.87175009999999,
        "location": {
          "lat": 33.6643598,
          "lon": -117.87175009999999
        }
      },
      {
        "key": "3000401120",
        "legal_name": "National Council On  Alcoholism  And Drug Dependence",
        "name": "–  Orange County",
        "address": "NCADD-OC/Irvine",
        "city_state_zip": "21068 Bake Parkway",
        "programs": "Lake  Forest, CA 92630",
        "contact": "Tondra Cicali",
        "phone": "(949) 770-1280",
        "fax": "(949) 770-4660",
        "url": "www.ncaddoc.org",
        "position": "33.6449166, -117.72154620000003",
        "lat": 33.6449166,
        "lng": -117.72154620000003,
        "location": {
          "lat": 33.6449166,
          "lon": -117.72154620000003
        }
      },
      {
        "key": "3000402120",
        "legal_name": "National Council On  Alcoholism  And Drug Dependence",
        "name": "–  Orange County",
        "address": "NCADD-OC/Santa Ana",
        "city_state_zip": "1200 N. Main  Street,  Suite 700",
        "programs": "Santa Ana, CA 92701",
        "contact": "Gerrie Pauley",
        "phone": "(714) 835-4252",
        "fax": "(714) 560-1680",
        "url": "www.ncaddoc.org",
        "position": "33.7551621, -117.8676208",
        "lat": 33.7551621,
        "lng": -117.8676208,
        "location": {
          "lat": 33.7551621,
          "lon": -117.8676208
        }
      },
      {
        "key": "3000501100",
        "legal_name": "NTSI",
        "name": "National Traffic Safety  Institute",
        "address": "525 N. Cabrillo  Park Drive, Suite 150",
        "city_state_zip": "Santa Ana, CA 92705",
        "programs": "First Offender",
        "contact": "Vicky Gonzalez",
        "phone": "(714) 953-5200",
        "fax": "(714) 953-2610",
        "url": "www.ntsi.com",
        "position": "33.7504041, -117.83985540000003",
        "lat": 33.7504041,
        "lng": -117.83985540000003,
        "location": {
          "lat": 33.7504041,
          "lon": -117.83985540000003
        }
      },
      {
        "key": "3000502100",
        "legal_name": "NTSI",
        "name": "National Traffic Safety  Institute",
        "address": "23141 Verdugo Drive, Suite 101",
        "city_state_zip": "Laguna Hills, CA 92653",
        "programs": "First Offender",
        "contact": "Vicky Gonzalez",
        "phone": "(949) 830-1494",
        "fax": "(949) 830-9598",
        "url": "www.ntsi.com",
        "position": "33.6266453, -117.7300611",
        "lat": 33.6266453,
        "lng": -117.7300611,
        "location": {
          "lat": 33.6266453,
          "lon": -117.7300611
        }
      },
      {
        "key": "3000601100",
        "legal_name": "Korean Community Services, Inc.",
        "name": "K.C. Services, Inc.",
        "address": "1060 South Brookhurst Road",
        "city_state_zip": "Fullerton, CA 92833",
        "programs": "First Offender",
        "contact": "Diana Capistrano",
        "phone": "(714) 449-1339",
        "fax": "(714) 449-1289",
        "url": "www.koreancommunity.org",
        "position": "33.8607657, -117.95866799999999",
        "lat": 33.8607657,
        "lng": -117.95866799999999,
        "location": {
          "lat": 33.8607657,
          "lon": -117.95866799999999
        }
      },
      {
        "key": "3000602100",
        "legal_name": "Korean Community Services, Inc.",
        "name": "K.C.  Services, Inc.",
        "address": "12531 Harbor Boulevard, Suite G",
        "city_state_zip": "Garden Grove, CA 92840",
        "programs": "First Offender",
        "contact": "Efren Guerrero",
        "phone": "(714) 638-5008",
        "fax": "(714) 638-3802",
        "url": "www.koreancommunity.org",
        "position": "33.7810887, -117.91532419999999",
        "lat": 33.7810887,
        "lng": -117.91532419999999,
        "location": {
          "lat": 33.7810887,
          "lon": -117.91532419999999
        }
      },
      {
        "key": "3000701100",
        "legal_name": "La Barre Chastang, Inc.",
        "name": "ABC  Traffic Programs",
        "address": "1501 North Raymond  Avenue, Suite C-D",
        "city_state_zip": "Anaheim, CA 92801",
        "mailing_address": "3130 S. Harbor  Boulevard,  Suite 530",
        "mailing_city_state_zip": "Santa Ana, CA 92704",
        "programs": "First Offender",
        "contact": "Cherine Child",
        "phone": "(714) 563-8999",
        "fax": "(714)  563-8995",
        "url": "www.abctraffic.com",
        "position": "33.8857225, -117.90751699999998",
        "lat": 33.8857225,
        "lng": -117.90751699999998,
        "location": {
          "lat": 33.8857225,
          "lon": -117.90751699999998
        }
      },
      {
        "key": "3000702100",
        "legal_name": "La Barre Chastang, Inc.",
        "name": "ABC  Traffic Programs",
        "address": "3400 W. Warner  Avenue, Suite D",
        "city_state_zip": "Santa Ana, CA 92704",
        "mailing_address": "3130 S. Harbor Boulevard, Suite 530",
        "mailing_city_state_zip": "Santa Ana, CA 92704",
        "programs": "First Offender",
        "contact": "Cherine Child",
        "phone": "(714) 429-9909",
        "fax": "(714) 429-9911",
        "url": "www.abctraffic.com",
        "position": "33.713352, -117.91466220000001",
        "lat": 33.713352,
        "lng": -117.91466220000001,
        "location": {
          "lat": 33.713352,
          "lon": -117.91466220000001
        }
      },
      {
        "key": "3100101120",
        "legal_name": "Community Recovery  Resources, Inc.",
        "name": "Community Recovery  Resources",
        "address": "730  Sunrise  Avenue, Building 200, Suite 201",
        "city_state_zip": "Roseville, CA 95661",
        "mailing_address": "P.O. Box 6028",
        "mailing_city_state_zip": "Auburn, CA  95604",
        "programs": "First Offender/18 Month",
        "contact": "Eric Smith",
        "phone": "(916) 782-3737",
        "fax": "(916) 797-8979",
        "url": "info@corr.us",
        "position": "38.7336507, -121.27262719999999",
        "lat": 38.7336507,
        "lng": -121.27262719999999,
        "location": {
          "lat": 38.7336507,
          "lon": -121.27262719999999
        }
      },
      {
        "key": "3100102120",
        "legal_name": "Community Recovery  Resources, Inc.",
        "name": "Community Recovery  Resources",
        "address": "12183 Locksley Lane Suite 102",
        "city_state_zip": "Auburn, CA 95602",
        "mailing_address": "P.O. Box 6028",
        "mailing_city_state_zip": "Auburn, CA 95604",
        "programs": "First Offender/18 Month",
        "contact": "Eric Smith",
        "phone": "(530) 885-1961",
        "fax": "(916) 797-8979",
        "url": "info@corr.us",
        "position": "38.9509249, -121.09595590000004",
        "lat": 38.9509249,
        "lng": -121.09595590000004,
        "location": {
          "lat": 38.9509249,
          "lon": -121.09595590000004
        }
      },
      {
        "key": "3100103120",
        "legal_name": "Community Recovery  Resources, Inc.",
        "name": "Community Recovery  Resources",
        "address": "8491 North Lake Boulevard",
        "city_state_zip": "Kings Beach, CA  96143",
        "mailing_address": "P.O. Box 6028",
        "mailing_city_state_zip": "Auburn, CA 95604",
        "programs": "First Offender/18 Month",
        "contact": "Eric Smith",
        "phone": "(530) 546-5641",
        "fax": "(916) 797-8979",
        "url": "info@corr.us",
        "position": "39.2365267, -120.02346520000003",
        "lat": 39.2365267,
        "lng": -120.02346520000003,
        "location": {
          "lat": 39.2365267,
          "lon": -120.02346520000003
        }
      },
      {
        "key": "3100104120",
        "legal_name": "Community Recovery Resources, Inc.",
        "name": "Community Recovery Resources",
        "address": "1530 3rd Street, Suite 212",
        "city_state_zip": "Lincoln, CA 95661",
        "mailing_address": "P.O. Box 6028",
        "mailing_city_state_zip": "Auburn, CA  95604",
        "programs": "First Offender/18 Month",
        "contact": "Eric Smith",
        "phone": "(916) 434-8927",
        "fax": "(916) 797-8979",
        "url": "info@corr.us",
        "position": "38.8896196, -121.30358319999999",
        "lat": 38.8896196,
        "lng": -121.30358319999999,
        "location": {
          "lat": 38.8896196,
          "lon": -121.30358319999999
        }
      },


      {
        "key": "3200201120",
        "legal_name": "Plumas Sierra Community Solutions, LLC",
        "name": "Plumas Sierra Community Solutions, LLC",
        "address": "173 Lawrence Street",
        "city_state_zip": "Quincy, CA 95971",
        "mailing_address": "P.O. Box 616",
        "mailing_city_state_zip": "Quincy, CA 95971",
        "programs": "First Offender/18 Month",
        "contact": "Plumas Sierra Community Solutions, LLC",
        "phone": "(530) 283-9678",
        "fax": "(530) 283-9891",
        "email_contact": "pscs@digitalpath.net",
        "position": "39.93779139999999, -120.94166459999997",
        "lat": 39.93779139999999,
        "lng": -120.94166459999997,
        "location": {
          "lat": 39.93779139999999,
          "lon": -120.94166459999997
        }
      },
      {
        "key": "3300101120",
        "legal_name": "Awareness Program, Inc.",
        "name": "Awareness Program",
        "address": "45926 Oasis Street",
        "city_state_zip": "Indio, CA 92201",
        "programs": "First Offender/18 Month",
        "contact": "Jeff Davied",
        "phone": "(760) 342-1233",
        "fax": "(760-342-5344",
        "url": "www.theawarenessgroup.org",
        "position": "33.7155114, -116.22040390000001",
        "lat": 33.7155114,
        "lng": -116.22040390000001,
        "location": {
          "lat": 33.7155114,
          "lon": -116.22040390000001
        }
      },
      {
        "key": "3300102120",
        "legal_name": "Awareness Program, Inc.",
        "name": "Awareness Program",
        "address": "1445 North Sunrise Way, Suite 103",
        "city_state_zip": "Palm Springs, CA 92262",
        "mailing_address": "45-550 Grace Street",
        "mailing_city_state_zip": "Indio, CA 92201",
        "programs": "First Offender/18 Month",
        "contact": "Jeff Davied",
        "phone": "(760) 342-1233",
        "fax": "(760-342-5344",
        "url": "www.theawarenessgroup.org",
        "position": "33.8424273, -116.5291302",
        "lat": 33.8424273,
        "lng": -116.5291302,
        "location": {
          "lat": 33.8424273,
          "lon": -116.5291302
        }
      },
      {
        "key": "3300301120",
        "legal_name": "The High Road Program",
        "name": "High Road Program",
        "address": "3579 Arlington Avenue, Suite 200",
        "city_state_zip": "Riverside, CA 92506",
        "programs": "First Offender/18 Month",
        "contact": "Gloria Gaitan",
        "phone": "(951) 781-6762",
        "fax": "(951) 781-6249",
        "url": "www.highroadprogram.org",
        "position": "33.9466484, -117.3914671",
        "lat": 33.9466484,
        "lng": -117.3914671,
        "location": {
          "lat": 33.9466484,
          "lon": -117.3914671
        }
      },
      {
        "key": "3300401120",
        "legal_name": "Riverside Recovery  Resources",
        "name": "Alpha Program",
        "address": "3757 Elizabeth  Street",
        "city_state_zip": "Riverside, CA 92506",
        "programs": "First Offender/18 Month",
        "contact": "Amanda Hanley",
        "phone": "(951) 684-3744",
        "fax": "(951) 684-2846",
        "url": "www.riversiderecoveryresources.org",
        "position": "33.9586199, -117.39147320000001",
        "lat": 33.9586199,
        "lng": -117.39147320000001,
        "location": {
          "lat": 33.9586199,
          "lon": -117.39147320000001
        }
      },
      {
        "key": "3300402120",
        "legal_name": "Riverside Recovery Resources",
        "name": "Alpha Program",
        "address": "600 Third Street, Suite C",
        "city_state_zip": "Lake Elsinore, CA 92530",
        "mailing_address": "P.O. Box 549",
        "mailing_city_state_zip": "Lake Elsinore, CA 92531",
        "programs": "First Offender/18 Month",
        "contact": "Laura Lopez",
        "phone": "(951) 674-5354",
        "fax": "(951) 674-5227",
        "url": "www.riversiderecoveryresources.org",
        "position": "33.6872491, -117.3365584",
        "lat": 33.6872491,
        "lng": -117.3365584,
        "location": {
          "lat": 33.6872491,
          "lon": -117.3365584
        }
      },
      {
        "key": "3300601120",
        "legal_name": "Community Settlement  Association of Riverside",
        "name": "Community Settlement Association",
        "address": "4366 Bermuda Avenue",
        "city_state_zip": "Riverside, CA 92507",
        "programs": "First Offender/18 Month",
        "contact": "Angelica Gutierrez",
        "phone": "(951) 782-2336",
        "fax": "(951) 782-2337",
        "url": "www.csarivca.org",
        "position": "33.970693, -117.36297030000003",
        "lat": 33.970693,
        "lng": -117.36297030000003,
        "location": {
          "lat": 33.970693,
          "lon": -117.36297030000003
        }
      },
      {
        "key": "3300701100",
        "legal_name": "Steinbock, Robert  E./Jonathan E. Steinbock",
        "name": "A  Better Community  Counseling Program  LLC",
        "address": "218 North Lincoln A venue, Suite 110",
        "city_state_zip": "Corona, CA 92882",
        "programs": "First Offender",
        "contact": "Jonathan Steinbock",
        "phone": "(951) 734-3399",
        "fax": "(951) 735-4171",
        "url": "www.abc-counseling.com",
        "position": "33.8848878, -117.58256619999997",
        "lat": 33.8848878,
        "lng": -117.58256619999997,
        "location": {
          "lat": 33.8848878,
          "lon": -117.58256619999997
        }
      },
      {
        "key": "3300901100",
        "legal_name": "The  Alert Program",
        "name": "Alert Program",
        "address": "730 Eugene Road",
        "city_state_zip": "Palm Springs, CA 92264",
        "programs": "First Offender",
        "contact": "Jacque Stewart",
        "phone": "(760) 322-7725",
        "fax": "(760) 322-6463",
        "url": "www.psdui.com",
        "position": "33.8111937, -116.49374190000003",
        "lat": 33.8111937,
        "lng": -116.49374190000003,
        "location": {
          "lat": 33.8111937,
          "lon": -116.49374190000003
        }
      },
      {
        "key": "3301001120",
        "legal_name": "Anderson and  Associates Counseling Services, Inc.",
        "name": "Anderson and  Associates Counseling Services, Inc.",
        "address": "26811 Hobie Circle,  Suite 2",
        "city_state_zip": "Murrieta, CA 92562",
        "programs": "First Offender/18 Month",
        "contact": "Cheryl Yager",
        "phone": "(951) 677-0777",
        "fax": "(951) 698-6322",
        "email_contact": "cyager@aacs-inc.com",
        "position": "33.5301439, -117.17309969999997",
        "lat": 33.5301439,
        "lng": -117.17309969999997,
        "location": {
          "lat": 33.5301439,
          "lon": -117.17309969999997
        }
      },
      {
        "key": "3301002120",
        "legal_name": "Anderson and  Associates Counseling Services, Inc.",
        "name": "Anderson and  Associates Counseling Services, Inc.",
        "address": "3980 W. Florida, Suite 105",
        "city_state_zip": "Hemet, CA 92545",
        "programs": "First Offender/18 Month",
        "contact": "Cindy Sanchez",
        "phone": "(951) 929-9466",
        "fax": "(951) 925-7067",
        "email_contact": "cyager@aacs-inc.com",
        "position": "33.7461683, -117.01426559999999",
        "lat": 33.7461683,
        "lng": -117.01426559999999,
        "location": {
          "lat": 33.7461683,
          "lon": -117.01426559999999
        }
      },
      {
        "key": "3301202120",
        "legal_name": "ACE Programs Management, LLC",
        "name": "ACE Programs Management, LLC",
        "address": "736 North State Street, Suite 108",
        "city_state_zip": "Hemet, CA 92543",
        "programs": "First Offender/18 Month",
        "contact": "Chris Surville",
        "phone": "(951) 929-4462",
        "fax": "(951) 925-3671",
        "url": "www.aceprograms.com",
        "position": "33.7592364, -116.97142100000002",
        "lat": 33.7592364,
        "lng": -116.97142100000002,
        "location": {
          "lat": 33.7592364,
          "lon": -116.97142100000002
        }
      },
      {
        "key": "3301203120",
        "legal_name": "ACE Programs Management, LLC",
        "name": "ACE Programs Management, LLC",
        "address": "45 South First Street",
        "city_state_zip": "Banning, CA 92220",
        "programs": "First Offender/18 Month",
        "contact": "Chris Surville",
        "phone": "(951) 849-5564",
        "fax": "(951) 849-4545",
        "url": "www.aceprograms.com",
        "position": "33.9250363, -116.87808799999999",
        "lat": 33.9250363,
        "lng": -116.87808799999999,
        "location": {
          "lat": 33.9250363,
          "lon": -116.87808799999999
        }
      },
      {
        "key": "3301204100",
        "legal_name": "ACE Programs Management, LLC",
        "name": "ACE Programs Management, LLC",
        "address": "23846 Sunnymead Boulevard, Suite 5",
        "city_state_zip": "Moreno Valley, CA 92553",
        "programs": "First Offender",
        "contact": "Chris Surville",
        "phone": "(951) 242-6339",
        "fax": "(951) 242-9839",
        "url": "www.aceprograms.com",
        "position": "33.9394692, -117.24733420000001",
        "lat": 33.9394692,
        "lng": -117.24733420000001,
        "location": {
          "lat": 33.9394692,
          "lon": -117.24733420000001
        }
      },
      {
        "key": "3301205100",
        "legal_name": "ACE Programs Management, LLC",
        "name": "ACE Programs Management, LLC",
        "address": "131 Corona Mall",
        "city_state_zip": "Corona, CA 92879",
        "programs": "First Offender",
        "contact": "Chris Surville",
        "phone": "(951) 817-5674",
        "fax": "(951) 817-5692",
        "url": "www.aceprograms.com",
        "position": "33.8765829, -117.56598600000001",
        "lat": 33.8765829,
        "lng": -117.56598600000001,
        "location": {
          "lat": 33.8765829,
          "lon": -117.56598600000001
        }
      },
      {
        "key": "3301301120",
        "legal_name": "Riverside County Department of Mental Health",
        "name": "Blythe Substance Abuse",
        "address": "1297 W. Hobsonway",
        "city_state_zip": "Blythe, CA 92225",
        "mailing_address": "3525 Presley  Avenue",
        "mailing_city_state_zip": "Riverside, CA 92507",
        "programs": "First Offender/18 Month",
        "contact": "William Harris",
        "phone": "(760) 921-5000",
        "fax": "(760) 921-5002",
        "email_contact": "ntollefson@rcmhd.org",
        "position": "33.6113765, -114.61132029999999",
        "lat": 33.6113765,
        "lng": -114.61132029999999,
        "location": {
          "lat": 33.6113765,
          "lon": -114.61132029999999
        }
      },
      {
        "key": "3400201120",
        "legal_name": "Safety Center Incorporated",
        "name": "Safety Center, Inc.",
        "address": "3909 Bradshaw Road",
        "city_state_zip": "Sacramento, CA 95827",
        "programs": "First Offender/18 Month",
        "contact": "Karla Hendrix",
        "phone": "(916) 438-3360",
        "fax": "(916) 438-2872",
        "url": "www.safetycenter.org",
        "position": "38.5516493, -121.33505990000003",
        "lat": 38.5516493,
        "lng": -121.33505990000003,
        "location": {
          "lat": 38.5516493,
          "lon": -121.33505990000003
        }
      },
      {
        "key": "3400202020",
        "legal_name": "Safety Center Incorporated",
        "name": "Safety Center, Inc.",
        "address": "6060 Sunrise Vista Drive, Suite 1625",
        "city_state_zip": "Citrus Heights, CA 95610",
        "programs": "First Offender/18 Month",
        "contact": "Karla Hendrix",
        "phone": "(916) 721-3748",
        "fax": "(916) 721-3903",
        "url": "www.safetycenter.org",
        "position": "38.6768667, -121.26385679999999",
        "lat": 38.6768667,
        "lng": -121.26385679999999,
        "location": {
          "lat": 38.6768667,
          "lon": -121.26385679999999
        }
      },
      {
        "key": "3400301100",
        "legal_name": "Breining Institute",
        "name": "Breining Institute",
        "address": "8894 Greenback Lane",
        "city_state_zip": "Orangevale, CA 95662",
        "programs": "First Offender",
        "contact": "Breining Institute",
        "phone": "(916) 987-0662",
        "fax": "(916) 987-9384",
        "url": "",
        "position": "38.6779131, -121.22626609999998",
        "lat": 38.6779131,
        "lng": -121.22626609999998,
        "location": {
          "lat": 38.6779131,
          "lon": -121.22626609999998
        }
      },
      {
        "key": "3400302100",
        "legal_name": "Breining Institute",
        "name": "Breining Institute",
        "address": "3159 Dwight Road, Suite 100",
        "city_state_zip": "Elk Grove, CA 95758",
        "programs": "Service",
        "contact": "Kathy C. Breining",
        "phone": "(916) 422-2408",
        "fax": "(916) 422-2418",
        "url": "www.breining.edu",
        "position": "38.4274359, -121.46135600000002",
        "lat": 38.4274359,
        "lng": -121.46135600000002,
        "location": {
          "lat": 38.4274359,
          "lon": -121.46135600000002
        }
      },
      {
        "key": "3400303100",
        "legal_name": "Breining Institute",
        "name": "Breining Institute",
        "address": "2775 Cottage Way, Suite 25",
        "city_state_zip": "Sacramento, CA 95825",
        "programs": "First Offender",
        "contact": "Kathy C. Breining",
        "phone": "(916) 972-8175",
        "fax": "(916) 972-1032",
        "url": "www.breining.edu",
        "position": "38.6040855, -121.39840459999999",
        "lat": 38.6040855,
        "lng": -121.39840459999999,
        "location": {
          "lat": 38.6040855,
          "lon": -121.39840459999999
        }
      },
      {
        "key": "3400501100",
        "legal_name": "Terra Nova Counseling",
        "name": "Terra Nova Drinking Driver Program 1",
        "address": "5750 Sunrise Boulevard",
        "city_state_zip": "Citrus Heights, CA 95610",
        "programs": "First Offender",
        "contact": "Robin Howard",
        "phone": "(916) 239-6379",
        "fax": "(916) 679-8940",
        "url": "www.terranovacounseling.org",
        "position": "38.6708594, -121.27105269999998",
        "lat": 38.6708594,
        "lng": -121.27105269999998,
        "location": {
          "lat": 38.6708594,
          "lon": -121.27105269999998
        }
      },
      {
        "key": "3400501100",
        "legal_name": "Terra Nova Counseling",
        "name": "Terra Nova Drinking Driver Program 2",
        "address": "4608 Roseville Road, Suite 105",
        "city_state_zip": "North Highlands, CA  95660",
        "programs": "First Offender",
        "contact": "Robin Howard",
        "phone": "(916) 900-4053",
        "fax": "(916) 334-1299",
        "url": "www.terranovacounseling.org",
        "position": "38.6523106, -121.3871896",
        "lat": 38.6523106,
        "lng": -121.3871896,
        "location": {
          "lat": 38.6523106,
          "lon": -121.3871896
        }
      },
      {
        "key": "3400502120",
        "legal_name": "Terra Nova Counseling",
        "name": "Terra Nova Drinking Driver Program 3",
        "address": "1025 19th  Street, Suite 2",
        "city_state_zip": "Sacramento, CA 95811",
        "programs": "First Offender/18 Month",
        "contact": "Robin Howard",
        "phone": "(916) 444-5680",
        "fax": "(916) 444-2185",
        "url": "www.terranovacounseling.org",
        "position": "38.57637039999999, -121.4812642",
        "lat": 38.57637039999999,
        "lng": -121.4812642,
        "location": {
          "lat": 38.57637039999999,
          "lon": -121.4812642
        }
      },
      {
        "key": "3400503120",
        "legal_name": "Terra Nova Counseling",
        "name": "Terra Nova Drinking Driver Program 4",
        "address": "4700 Northgate Boulevard, Suite 122",
        "city_state_zip": "Sacramento, CA 95834",
        "programs": "First Offender/18 month",
        "contact": "Robin Howard",
        "phone": "(916) 564-0600",
        "fax": "(916) 564-0606",
        "url": "www.terrranovacounseling.org",
        "position": "38.6542005, -121.4772623",
        "lat": 38.6542005,
        "lng": -121.4772623,
        "location": {
          "lat": 38.6542005,
          "lon": -121.4772623
        }
      },
      {
        "key": "3500201120",
        "legal_name": "Lifestyle Management Drydock, Inc.",
        "name": "Lifestyle Management Drydock II",
        "address": "210 San Benito Street, Suite D",
        "city_state_zip": "Hollister, CA 95023",
        "programs": "First Offender/18 Month",
        "contact": "Margie Loza",
        "phone": "(831) 636-0411",
        "fax": "(831) 636-0689",
        "email_contact": "lsmdrydock2@sbcglobal.net",
        "position": "36.8542478, -121.40233549999999",
        "lat": 36.8542478,
        "lng": -121.40233549999999,
        "location": {
          "lat": 36.8542478,
          "lon": -121.40233549999999
        }
      },
      {
        "key": "3600101120",
        "legal_name": "Valley Improvement Programs, Inc.",
        "name": "Valley Improvement Programs, Inc.",
        "address": "210 West B Street",
        "city_state_zip": "Ontario, CA 91762",
        "programs": "First Offender/18 Month",
        "contact": "Louise McKay",
        "phone": "(909) 983-3665",
        "fax": "(909) 467-3646",
        "email_contact": "",
        "position": "34.0647276, -117.65279499999997",
        "lat": 34.0647276,
        "lng": -117.65279499999997,
        "location": {
          "lat": 34.0647276,
          "lon": -117.65279499999997
        }
      },
      {
        "key": "3600102120",
        "legal_name": "Valley Improvement Programs, Inc.",
        "name": "Valley Improvement Programs, Inc.",
        "address": "8540 Archibald Avenue, Suite A",
        "city_state_zip": "Rancho Cucamonga, CA 91730",
        "programs": "First Offender/18 Month",
        "contact": "Louise McKay",
        "phone": "(909) 987-4036",
        "fax": "(909) 481-5368",
        "email_contact": "",
        "position": "34.09850309999999, -117.5941502",
        "lat": 34.09850309999999,
        "lng": -117.5941502,
        "location": {
          "lat": 34.09850309999999,
          "lon": -117.5941502
        }
      },
      {
        "key": "3600103120",
        "legal_name": "Valley Improvement Programs, Inc.",
        "name": "Valley Improvement Programs, Inc.",
        "address": "1589 West 9th Street, Suite E",
        "city_state_zip": "Upland, CA 91786",
        "programs": "First Offender/18 Month",
        "contact": "Louise McKay",
        "phone": "(909) 985-2785",
        "fax": "(909) 982-5597",
        "email_contact": "",
        "position": "34.0963887, -117.68039279999999",
        "lat": 34.0963887,
        "lng": -117.68039279999999,
        "location": {
          "lat": 34.0963887,
          "lon": -117.68039279999999
        }
      },
      {
        "key": "3600202120",
        "legal_name": "Jackson-Bibby Awareness Group, Inc.",
        "name": "Jackson-Bibby Awareness Group, Inc.",
        "address": "1200 Arizona, Suite 10",
        "city_state_zip": "Redlands, CA 92374",
        "programs": "First Offender/18 Month",
        "contact": "Alisha Vega",
        "phone": "(909) 792-6925",
        "fax": "(909) 792-6670",
        "email_contact": "jbagmelis@verizon.net",
        "position": "34.067905, -117.207515",
        "lat": 34.067905,
        "lng": -117.207515,
        "location": {
          "lat": 34.067905,
          "lon": -117.207515
        }
      },
      {
        "key": "3600203120",
        "legal_name": "Jackson-Bibby Awareness Group, Inc.",
        "name": "Jackson-Bibby Awareness Group, Inc.",
        "address": "14420 Civic Drive, Suite 3",
        "city_state_zip": "Victorville, CA 92392",
        "programs": "First Offender/18 Month",
        "contact": "Alisha Vega",
        "phone": "(760) 241-3300",
        "fax": "(760) 241-3304",
        "email_contact": "jbagmelis@verizon.net",
        "position": "34.5126844, -117.32402200000001",
        "lat": 34.5126844,
        "lng": -117.32402200000001,
        "location": {
          "lat": 34.5126844,
          "lon": -117.32402200000001
        }
      },
      {
        "key": "3600204120",
        "legal_name": "Jackson-Bibby Awareness Group, Inc.",
        "name": "Jackson-Bibby Awareness Group, Inc.",
        "address": "222 East Main Street, Suite 218",
        "city_state_zip": "Barstow, CA 92311",
        "programs": "First Offender/18 Month",
        "contact": "Alisha Vega",
        "phone": "(760) 256-6114",
        "fax": "(760) 256-9517",
        "email_contact": "jbagmelis@verizon.net",
        "position": "34.8984109, -117.0251394",
        "lat": 34.8984109,
        "lng": -117.0251394,
        "location": {
          "lat": 34.8984109,
          "lon": -117.0251394
        }
      },
      {
        "key": "3600301120",
        "legal_name": "Social Science Services, Inc.",
        "name": "Social Science Services, Inc.",
        "address": "18612 Santa Ana Avenue",
        "city_state_zip": "Bloomington, CA 92316",
        "programs": "First Offender/18 Month",
        "contact": "weezie6@aol.com",
        "phone": "(909) 421-7120",
        "fax": "(909) 421-7128",
        "url": "www.cedarhouse.org",
        "position": "34.0568362, -117.39808310000001",
        "lat": 34.0568362,
        "lng": -117.39808310000001,
        "location": {
          "lat": 34.0568362,
          "lon": -117.39808310000001
        }
      },
      {
        "key": "3600501120",
        "legal_name": "Mental Health Systems, Inc.",
        "name": "Needles Center For Change",
        "address": "300 H Street",
        "city_state_zip": "Needles, CA 92363",
        "programs": "First Offender/18 Month",
        "contact": "Patti Munson",
        "phone": "(760) 326-4590",
        "fax": "(760) 326-3154",
        "url": "www.mhsinc.org",
        "position": "34.8393044, -114.60907480000003",
        "lat": 34.8393044,
        "lng": -114.60907480000003,
        "location": {
          "lat": 34.8393044,
          "lon": -114.60907480000003
        }
      },
      {
        "key": "3600502120",
        "legal_name": "Mental Health Systems, Inc.",
        "name": "Big Bear Center for Change",
        "address": "41945 Big Bear Boulevard, Suite 208",
        "city_state_zip": "Big Bear Lake, CA 92315",
        "mailing_address": "P.O. Box 6981",
        "mailing_city_state_zip": "Big Bear Lake, CA 92315",
        "programs": "First Offender/18 Month",
        "contact": "Kimberly Bond",
        "phone": "(909) 878-0101",
        "url": "www.mhsinc.org",
        "position": "34.2428068, -116.88704210000003",
        "lat": 34.2428068,
        "lng": -116.88704210000003,
        "location": {
          "lat": 34.2428068,
          "lon": -116.88704210000003
        }
      },
      {
        "key": "3600503120",
        "legal_name": "Mental Health Systems, Inc.",
        "name": "Yucca Valley Center for Change",
        "address": "58945 Business Center Drive, Suites J, P, N",
        "city_state_zip": "Yucca Valley, CA 92284",
        "programs": "First Offender/18 Month",
        "contact": "Tracey Wood",
        "phone": "(760) 369-1074",
        "url": "www.mhsinc.org",
        "position": "34.1213242, -116.3776403",
        "lat": 34.1213242,
        "lng": -116.3776403,
        "location": {
          "lat": 34.1213242,
          "lon": -116.3776403
        }
      },
      {
        "key": "3601101120",
        "legal_name": "Mental Health Systems, Inc.",
        "name": "Pegasus DUI San Bernardino",
        "address": "2282 North Sierra Way",
        "city_state_zip": "San Bernardino, CA 92405",
        "mailing_address": "9465 Farnham Street",
        "mailing_city_state_zip": "San Diego, CA 92123",
        "programs": "First Offender/18 Month",
        "contact": "Mary Jane Lind",
        "phone": "(909) 881-1570",
        "fax": "(909) 882-1315",
        "url": "www.mhsinc.org",
        "position": "34.136825, -117.28545429999997",
        "lat": 34.136825,
        "lng": -117.28545429999997,
        "location": {
          "lat": 34.136825,
          "lon": -117.28545429999997
        }
      },
      {
        "key": "3601201120",
        "legal_name": "Rehabilitation Alcohol Program Corporation",
        "name": "Rehabilitation Alcohol Program, Inc.",
        "address": "17205 Arrow Boulevard",
        "city_state_zip": "Fontana, CA 92335",
        "programs": "First Offender/18 Month",
        "contact": "Christine Kesse",
        "phone": "(909) 356-9390",
        "fax": "(909) 356-0120",
        "email_contact": "",
        "position": "34.0990621, -117.42902270000002",
        "lat": 34.0990621,
        "lng": -117.42902270000002,
        "location": {
          "lat": 34.0990621,
          "lon": -117.42902270000002
        }
      },
      {
        "key": "3601301120",
        "legal_name": "W & G Enterprises, Inc.",
        "name": "Alcohol Education & Recovery Services",
        "address": "12560 Central Avenue",
        "city_state_zip": "Chino, CA 91710",
        "programs": "rap4recovery@hotmail.com",
        "contact": "Aaron S. Watkins",
        "phone": "(909) 591 4761",
        "fax": "(909) 902-5500",
        "email_contact": "awatkins@aerc.us",
        "position": "34.0242432, -117.69050429999999",
        "lat": 34.0242432,
        "lng": -117.69050429999999,
        "location": {
          "lat": 34.0242432,
          "lon": -117.69050429999999
        }
      },
      {
        "key": "3601401120",
        "legal_name": "Dalton & Associates",
        "name": "Dalton &  Associates",
        "address": "16200 Bear Valley Road, Suite 111",
        "city_state_zip": "Victorville, CA 92395",
        "programs": "First Offender/18 Month",
        "contact": "Micah Bass",
        "phone": "(760) 241-1777",
        "fax": "(760) 245-2253",
        "url": "www.daltonassociatesonline.com",
        "position": "34.4720451, -117.30994809999999",
        "lat": 34.4720451,
        "lng": -117.30994809999999,
        "location": {
          "lat": 34.4720451,
          "lon": -117.30994809999999
        }
      },
      {
        "key": "3601601120",
        "legal_name": "Rim Family Services, Inc.",
        "name": "Rim Family Services",
        "address": "28545 Highway 18",
        "city_state_zip": "Skyforest, CA 92385",
        "mailing_address": "PO Box 578",
        "mailing_city_state_zip": "Skyforest, CA 92385",
        "programs": "First Offender/18 Month",
        "contact": "Joscelyn Fields",
        "phone": "(909) 336-1800",
        "fax": "(909) 336-0990",
        "url": "www.rimfamilyservices.org",
        "position": "34.2353136, -117.18080739999999",
        "lat": 34.2353136,
        "lng": -117.18080739999999,
        "location": {
          "lat": 34.2353136,
          "lon": -117.18080739999999
        }
      },
      {
        "key": "3601801120",
        "legal_name": "Correctional Healthcare Companies,  Inc.",
        "name": "Correctional Healthcare Companies, Inc.",
        "address": "353 West  6th  Street",
        "city_state_zip": "San Bernardino, CA  92401",
        "programs": "First Offender/18 Month",
        "contact": "Jorge Acosta",
        "phone": "(909) 888-0149",
        "fax": "(909) 888-7179",
        "email_contact": "JAcosta@correctioncare.com",
        "position": "34.1099146, -117.29071160000001",
        "lat": 34.1099146,
        "lng": -117.29071160000001,
        "location": {
          "lat": 34.1099146,
          "lon": -117.29071160000001
        }
      },
      {
        "key": "3700102120",
        "legal_name": "Episcopal Community Service",
        "name": "East County  ACCORD",
        "address": "7474 El Cajon Boulevard",
        "city_state_zip": "La Mesa, CA 91942",
        "programs": "850 Arnele Avenue    [Provider moving, effective",
        "contact": "Stacie Perez",
        "phone": "(619) 741-8147",
        "fax": "(619) 741-8139",
        "url": "www.ecscalifornia.org",
        "position": "32.7687048, -117.03686099999999",
        "lat": 32.7687048,
        "lng": -117.03686099999999,
        "location": {
          "lat": 32.7687048,
          "lon": -117.03686099999999
        }
      },
      {
        "key": "3700301120",
        "legal_name": "Metropolitan Area Advisory Committee  On Anti-Poverty",
        "name": "Of San Diego County, Inc.",
        "address": "MAAC DDP",
        "city_state_zip": "1355 Third Avenue",
        "programs": "Chula Vista, CA 91911",
        "contact": "Patty Bailey",
        "phone": "(619) 409-1780",
        "fax": "(619) 425-3500",
        "url": "wwwmaacproject.org",
        "position": "32.604826, -117.06475490000003",
        "lat": 32.604826,
        "lng": -117.06475490000003,
        "location": {
          "lat": 32.604826,
          "lon": -117.06475490000003
        }
      },
      {
        "key": "3700501120",
        "legal_name": "San Diego State University Foundation",
        "name": "SDSU Center on Substance Abuse DDP",
        "address": "9245 Sky Park Court, Suite 101",
        "city_state_zip": "San Diego, CA 92123",
        "programs": "First Offender/18 Month",
        "contact": "Melanie Barker",
        "phone": "(858) 467-6810",
        "fax": "(858) 467-6822",
        "url": "www.sdsuduip.com",
        "position": "32.8148981, -117.12657469999999",
        "lat": 32.8148981,
        "lng": -117.12657469999999,
        "location": {
          "lat": 32.8148981,
          "lon": -117.12657469999999
        }
      },
      {
        "key": "3700601120",
        "legal_name": "MHN Government Services, Inc.",
        "name": "Occupational Health Services, Inc.",
        "address": "1050 Los Vallecitos Boulevard, Suite 109",
        "city_state_zip": "San Marcos, CA 92069",
        "programs": "First Offender/18 Month",
        "contact": "Barbara Aday-Garcia",
        "phone": "(760) 752-5300",
        "fax": "(760) 752-5390",
        "url": "www.duiprograms.ohs.mhn.com",
        "position": "33.1431797, -117.18682849999999",
        "lat": 33.1431797,
        "lng": -117.18682849999999,
        "location": {
          "lat": 33.1431797,
          "lon": -117.18682849999999
        }
      },
      {
        "key": "3800201100",
        "legal_name": "Driver Performance Institutes, Inc.",
        "name": "Driver Performance Institutes, Inc.",
        "address": "350 Townsend Street, Suite 205",
        "city_state_zip": "San Francisco, CA 94107",
        "programs": "First Offender",
        "contact": "Jeffrey Nilsen",
        "phone": "(415) 905-5555",
        "fax": "(415) 905-5565",
        "url": "",
        "position": "37.7762912, -122.39652519999999",
        "lat": 37.7762912,
        "lng": -122.39652519999999,
        "location": {
          "lat": 37.7762912,
          "lon": -122.39652519999999
        }
      },
      {
        "key": "3800301020",
        "legal_name": "www.sfdpi.com",
        "name": "The Mission Council On Alcohol Abuse For The Sp anish Speaking Robert Alfaro",
        "address": "Dry Zone M.O. DUI Program",
        "city_state_zip": "154 Capp Street",
        "programs": "San Francisco, CA 94103",
        "contact": "18 Month",
        "phone": "(415) 826-6767",
        "fax": "(415) 826-6774",
        "url": "",
        "position": "37.7640103, -122.4188532",
        "lat": 37.7640103,
        "lng": -122.4188532,
        "location": {
          "lat": 37.7640103,
          "lon": -122.4188532
        }
      },
      {
        "key": "3800501120",
        "legal_name": "Center for Open Recovery",
        "name": "Center for Open Recovery",
        "address": "1170 Market Street, 6th  Floor",
        "city_state_zip": "San Francisco, CA 94102",
        "programs": "www.missioncouncil.org",
        "contact": "Pedro Torres",
        "phone": "(415) 296-9900",
        "fax": "(415) 296-0626",
        "url": "www.openrecoverysf.org",
        "position": "37.7795265, -122.41428150000002",
        "lat": 37.7795265,
        "lng": -122.41428150000002,
        "location": {
          "lat": 37.7795265,
          "lon": -122.41428150000002
        }
      },
      {
        "key": "3900201120",
        "legal_name": "Valley Community Counseling Services, Inc.",
        "name": "Valley Community Counseling Services, Inc.",
        "address": "129 East Center Street, Suite 4",
        "city_state_zip": "Manteca, CA 95336",
        "programs": "First Offender/18 Month",
        "contact": "Marla Conboy",
        "phone": "(209) 823-1911",
        "fax": "(209) 823-1931",
        "email_contact": "marlaconboy@vccsinc.org",
        "position": "37.799347, -121.21555840000002",
        "lat": 37.799347,
        "lng": -121.21555840000002,
        "location": {
          "lat": 37.799347,
          "lon": -121.21555840000002
        }
      },
      {
        "key": "3900202120",
        "legal_name": "Valley Community Counseling Services, Inc.",
        "name": "Valley Community Counseling Services, Inc.",
        "address": "1300 West Lodi Avenue, Suite G2",
        "city_state_zip": "Lodi, CA 95242",
        "programs": "First Offender/18 Month",
        "contact": "Marla Conboy",
        "phone": "(209) 334-2126",
        "fax": "(209) 369-8406",
        "email_contact": "",
        "position": "38.1298883, -121.28885509999998",
        "lat": 38.1298883,
        "lng": -121.28885509999998,
        "location": {
          "lat": 38.1298883,
          "lon": -121.28885509999998
        }
      },
      {
        "key": "3900203120",
        "legal_name": "Valley Community Counseling Services, Inc.",
        "name": "Tracy Drinking Driver Program",
        "address": "19 East 6th Street",
        "city_state_zip": "Tracy, CA 95376",
        "programs": "First Offender/18 Month",
        "contact": "Marla Conboy",
        "phone": "(209) 835-8583",
        "fax": "(209) 835-2910",
        "email_contact": "",
        "position": "37.7349842, -121.42516599999999",
        "lat": 37.7349842,
        "lng": -121.42516599999999,
        "location": {
          "lat": 37.7349842,
          "lon": -121.42516599999999
        }
      },

      {
        "key": "3900401120",
        "legal_name": "San Joaquin Safety Council",
        "name": "San Joaquin Safety Council",
        "address": "6004 N. El Dorado Street",
        "city_state_zip": "Stockton, CA 95207",
        "programs": "First Offender/18 Month",
        "contact": "Lyndee Riley",
        "phone": "(209) 472-7233",
        "fax": "(209) 472-1340",
        "url": "www.californiasafety.org",
        "position": "38.0076247, -121.30804230000001",
        "lat": 38.0076247,
        "lng": -121.30804230000001,
        "location": {
          "lat": 38.0076247,
          "lon": -121.30804230000001
        }
      },
      {
        "key": "3900501120",
        "legal_name": "S & B Services, Inc.",
        "name": "Alcohol Recovery Center",
        "address": "1125 North Hunter Street",
        "city_state_zip": "Stockton, CA 95202",
        "programs": "marlaconboy@vccsinc.org",
        "contact": "Sam Beasley",
        "phone": "(209) 464-7627",
        "fax": "(209) 466-7627",
        "email_contact": "arcdui2003@yahoo.com",
        "position": "37.9643323, -121.29192869999997",
        "lat": 37.9643323,
        "lng": -121.29192869999997,
        "location": {
          "lat": 37.9643323,
          "lon": -121.29192869999997
        }
      },
      {
        "key": "3900601123",
        "legal_name": "Service First of Northern California",
        "name": "Service First  of Northern California",
        "address": "1222 Monaco Court,  Suite 28",
        "city_state_zip": "Stockton, CA 95207",
        "mailing_address": "102 W. Bianchi Road",
        "mailing_city_state_zip": "Stockton, CA 95207",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Brenda Bafford",
        "phone": "(209) 644-6328",
        "fax": "(209) 644-6308",
        "url": "www.servicefirstnc.org",
        "position": "37.9880162, -121.320064",
        "lat": 37.9880162,
        "lng": -121.320064,
        "location": {
          "lat": 37.9880162,
          "lon": -121.320064
        }
      },
      {
        "key": "3900602123",
        "legal_name": "Service First of Northern California",
        "name": "Service First of Northern California",
        "address": "445 W. Weber  Avenue,  Suite 12 9",
        "city_state_zip": "Stockton, CA 95203",
        "mailing_address": "102 W. Bianchi Road",
        "mailing_city_state_zip": "Stockton, CA 95207",
        "programs": "First Offender/18 Month/30 Month",
        "contact": "Brenda Bafford",
        "phone": "(209) 514-4052",
        "fax": "(209) 644-4828",
        "url": "www.servicefirstnc.org",
        "position": "37.9528065, -121.2971925",
        "lat": 37.9528065,
        "lng": -121.2971925,
        "location": {
          "lat": 37.9528065,
          "lon": -121.2971925
        }
      },
      {
        "key": "4000101120",
        "legal_name": "San Luis Obispo County Drug And Alcohol Services",
        "name": "San Luis  Obispo County DDP",
        "address": "2180 Johnson Avenue",
        "city_state_zip": "San Luis  Obispo, CA  93401",
        "programs": "First Offender/18 Month",
        "contact": "Dr. Star Graber",
        "phone": "(805) 781-4275",
        "fax": "(805) 781-1227",
        "url": "www.slocounty.ca.gov",
        "position": "35.2753151, -120.64642800000001",
        "lat": 35.2753151,
        "lng": -120.64642800000001,
        "location": {
          "lat": 35.2753151,
          "lon": -120.64642800000001
        }
      },
      {
        "key": "4000102120",
        "legal_name": "San Luis  Obispo County Drug And Alcohol Services",
        "name": "San Luis  Obispo County DDP",
        "address": "1523 Longbranch Avenue",
        "city_state_zip": "Grover Beach, CA 93433",
        "mailing_address": "2180 Johnson A venue",
        "mailing_city_state_zip": "San Luis Obispo, CA 93401",
        "programs": "First Offender/18 Month",
        "contact": "Star Graber",
        "phone": "(805) 461-6080",
        "fax": "(805) 473-7188",
        "url": "www.slocounty.ca.gov",
        "position": "35.1193826, -120.61263099999996",
        "lat": 35.1193826,
        "lng": -120.61263099999996,
        "location": {
          "lat": 35.1193826,
          "lon": -120.61263099999996
        }
      },
      {
        "key": "4000103120",
        "legal_name": "San Luis  Obispo County Drug And Alcohol Services",
        "name": "San Luis  Obispo County DDP",
        "address": "3556 El Camino Real",
        "city_state_zip": "Atascadero, CA 93422",
        "mailing_address": "2180 Johnson A venue",
        "mailing_city_state_zip": "San Luis Obispo, CA 93401",
        "programs": "First Offender/18 Month",
        "contact": "Star Graber",
        "phone": "(805) 461-6080",
        "fax": "(805) 461-6114",
        "url": "www.slocounty.ca.gov",
        "position": "35.5019887, -120.6870131",
        "lat": 35.5019887,
        "lng": -120.6870131,
        "location": {
          "lat": 35.5019887,
          "lon": -120.6870131
        }
      },
      {
        "key": "4000104120",
        "legal_name": "San Luis  Obispo County Drug And Alcohol Services",
        "name": "San Luis  Obispo County DDP",
        "address": "1763 Ramada Drive",
        "city_state_zip": "Paso Robles, CA 93446",
        "mailing_address": "2180 Johnson A venue",
        "mailing_city_state_zip": "San Luis Obispo, CA 93401",
        "programs": "First Offender/18 Month",
        "contact": "Dr. Star Graber",
        "phone": "(805) 226-3200",
        "fax": "(805) 226-3221",
        "url": "www.slocounty.ca.gov",
        "position": "35.591372, -120.69479160000003",
        "lat": 35.591372,
        "lng": -120.69479160000003,
        "location": {
          "lat": 35.591372,
          "lon": -120.69479160000003
        }
      },
      {
        "key": "4100101120",
        "legal_name": "Pyramid  Alternatives, Inc.",
        "name": "Pyramid  Alternatives, Inc.",
        "address": "480 Manor Plaza",
        "city_state_zip": "Pacifica, CA 94044",
        "programs": "First Offender/18 Month",
        "contact": "Pyramid Alternatives",
        "phone": "(650) 355-8787",
        "fax": "(650) 355-8780",
        "url": "www.pyramidalternatives.org",
        "position": "37.649943, -122.492255",
        "lat": 37.649943,
        "lng": -122.492255,
        "location": {
          "lat": 37.649943,
          "lon": -122.492255
        }
      },
      {
        "key": "4100301100",
        "legal_name": "StarVista",
        "name": "Archway",
        "address": "609 Price Avenue, Suite 201",
        "city_state_zip": "Redwood City, CA 94063",
        "programs": "First Offender",
        "contact": "Randy Yano",
        "phone": "(650)366-8433",
        "fax": "(650) 366-8455",
        "url": "www.star-vista.org",
        "position": "37.4934088, -122.23038429999997",
        "lat": 37.4934088,
        "lng": -122.23038429999997,
        "location": {
          "lat": 37.4934088,
          "lon": -122.23038429999997
        }
      },
      {
        "key": "4100401100",
        "legal_name": "Sitike",
        "name": "Sitike Counseling Center",
        "address": "306 Spruce  Avenue",
        "city_state_zip": "South San Francisco, CA 94080",
        "programs": "First Offender",
        "contact": "Joe Wagenhofer",
        "phone": "(650) 589-9305",
        "fax": "(650) 589-9330",
        "url": "www.sitike.org",
        "position": "37.6566416, -122.41566720000003",
        "lat": 37.6566416,
        "lng": -122.41566720000003,
        "location": {
          "lat": 37.6566416,
          "lon": -122.41566720000003
        }
      },
      {
        "key": "4100501100",
        "legal_name": "Free At Last: Community Recovery A nd Rehabilitation  Se rvices",
        "name": "Free at Last",
        "address": "1796 Bay Road",
        "city_state_zip": "East Palo  Alto, CA 94303",
        "programs": "First Offender",
        "contact": "Gerardo Barragan",
        "phone": "(650) 462-6999",
        "fax": "(650) 462-1055",
        "url": "www.freeatlast.org",
        "position": "37.4716005, -122.13586829999997",
        "lat": 37.4716005,
        "lng": -122.13586829999997,
        "location": {
          "lat": 37.4716005,
          "lon": -122.13586829999997
        }
      },
      {
        "key": "4100601120",
        "legal_name": "MHN Government Services, Inc.",
        "name": "Occupational  Health Services,  Inc.",
        "address": "1941 O’Farrell Street, Suite 114",
        "city_state_zip": "San Mateo, CA 94403",
        "programs": "First Offender/18 Month",
        "contact": "Jason Espinoza",
        "phone": "(650) 381-7100",
        "fax": "(650) 572-0274",
        "url": "ohssanmateo@mhn.com",
        "position": "37.5483781, -122.31446619999997",
        "lat": 37.5483781,
        "lng": -122.31446619999997,
        "location": {
          "lat": 37.5483781,
          "lon": -122.31446619999997
        }
      },
      {
        "key": "4200101020",
        "legal_name": "Council On Alcoholism  And Drug Abuse",
        "name": "Council On Alcoholism  And Drug Abuse",
        "address": "232 East Canon Perdido Street",
        "city_state_zip": "Santa Barbara, CA 93101",
        "mailing_address": "PO Box 28",
        "mailing_city_state_zip": "Santa Barbara, CA 93102",
        "programs": "18 Month",
        "contact": "Ramon Velazquez",
        "phone": "(805) 963-1433",
        "fax": "(805) 963-1720",
        "url": "www.cadasb.org",
        "position": "34.4233263, -119.69717809999997",
        "lat": 34.4233263,
        "lng": -119.69717809999997,
        "location": {
          "lat": 34.4233263,
          "lon": -119.69717809999997
        }
      },
      {
        "key": "4200201120",
        "legal_name": "Central Coast Headway, Inc.",
        "name": "Central Coast Headway, Inc.",
        "address": "318 West Carmen Lane",
        "city_state_zip": "Santa Maria, CA 93454",
        "programs": "First Offender/18 Month",
        "contact": "Maria Mandziara",
        "phone": "(805) 922-2106",
        "fax": "(805) 922-2751",
        "email_contact": "smcch@utech.net",
        "position": "34.9245207, -120.4399482",
        "lat": 34.9245207,
        "lng": -120.4399482,
        "location": {
          "lat": 34.9245207,
          "lon": -120.4399482
        }
      },

      {
        "key": "4200301100",
        "legal_name": "Zona Seca",
        "name": "Zona Seca",
        "address": "26 W.  Figueroa Street",
        "city_state_zip": "Santa Barbara, CA 93101",
        "programs": "First Offender",
        "contact": "Diana Banales",
        "phone": "(805) 963-8961",
        "fax": "(805) 963-8964",
        "url": "www.zonaseca.com",
        "position": "34.421859, -119.70412039999997",
        "lat": 34.421859,
        "lng": -119.70412039999997,
        "location": {
          "lat": 34.421859,
          "lon": -119.70412039999997
        }
      },
      {
        "key": "4300201120",
        "legal_name": "Alert Driving, Inc.",
        "name": "Alert Driving, Inc.",
        "address": "1900 Camden  Avenue, Suite 205",
        "city_state_zip": "San Jose, CA 95124",
        "programs": "First Offender/18 Month",
        "contact": "Denise O’Sullivan",
        "phone": "(408) 879-7581",
        "fax": "(408) 879-7587",
        "url": "www.alertdrivinginc.com",
        "position": "37.26141459999999, -121.9236871",
        "lat": 37.26141459999999,
        "lng": -121.9236871,
        "location": {
          "lat": 37.26141459999999,
          "lon": -121.9236871
        }
      },
      {
        "key": "4300801120",
        "legal_name": "NTSI",
        "name": "National Traffic Safety  Institute",
        "address": "275 North 4th  Street, 2nd  Floor",
        "city_state_zip": "San Jose, CA 95112",
        "programs": "First Offender/18 Month",
        "contact": "Rodney Starks",
        "phone": "(408) 297-8566",
        "fax": "(408) 297-3541",
        "url": "www.ntsi.com",
        "position": "37.3413299, -121.89058869999997",
        "lat": 37.3413299,
        "lng": -121.89058869999997,
        "location": {
          "lat": 37.3413299,
          "lon": -121.89058869999997
        }
      },
      {
        "key": "4301001120",
        "legal_name": "The Asian  Americans  for Community Involvement",
        "name": "Of Santa Clara County, Inc.",
        "address": "Asian Americans for  Community Involvement",
        "city_state_zip": "2400 Moorpark, Suite 104",
        "programs": "San Jose, CA 95128",
        "contact": "Kelly Chau",
        "phone": "(408) 975-2735",
        "fax": "(408) 975-2741",
        "url": "www.aaci.org",
        "position": "37.3157238, -121.93710820000001",
        "lat": 37.3157238,
        "lng": -121.93710820000001,
        "location": {
          "lat": 37.3157238,
          "lon": -121.93710820000001
        }
      },
      {
        "key": "4301201120",
        "legal_name": "Community Solutions For Children, Families  A nd Individuals",
        "name": "Community Solutions",
        "address": "9015 Murray  Avenue, Suite 105",
        "city_state_zip": "Gilroy, CA 95020",
        "programs": "First Offender/18 Month",
        "contact": "Patricia Mears",
        "phone": "(408) 846-4735",
        "fax": "(408) 847-1685",
        "url": "www.communitysolutions.org",
        "position": "37.0306424, -121.57474890000003",
        "lat": 37.0306424,
        "lng": -121.57474890000003,
        "location": {
          "lat": 37.0306424,
          "lon": -121.57474890000003
        }
      },
      {
        "key": "4301301120",
        "legal_name": "The Gardner Family  Care Corporation",
        "name": "Proyecto Primavera DDP",
        "address": "160 E. Virginia Street, Suite 264",
        "city_state_zip": "San Jose, CA 95112",
        "programs": "First Offender/18 Month",
        "contact": "Socorro Ramirez",
        "phone": "(408) 977-1594",
        "fax": "(408) 271-9852",
        "url": "www.gardnerfamilyhealth.org",
        "position": "37.32560429999999, -121.8776962",
        "lat": 37.32560429999999,
        "lng": -121.8776962,
        "location": {
          "lat": 37.32560429999999,
          "lon": -121.8776962
        }
      },
      {
        "key": "4301401120",
        "legal_name": "MHN Government Services, Inc.",
        "name": "Occupational  Health Services,  Inc.",
        "address": "625 Ellis Street, Suite 100",
        "city_state_zip": "Mountain View, CA 94043",
        "programs": "First Offender/18 Month",
        "contact": "Jason Espinoza",
        "phone": "(650) 988-4825",
        "fax": "(650) 988-0175",
        "url": "www.duiprograms.ohs.mhn.com",
        "position": "37.4023608, -122.0507819",
        "lat": 37.4023608,
        "lng": -122.0507819,
        "location": {
          "lat": 37.4023608,
          "lon": -122.0507819
        }
      },
      {
        "key": "4400101120",
        "legal_name": "Encompass Community Services",
        "name": "Alto DDP",
        "address": "585-B  Auto Center Drive",
        "city_state_zip": "Watsonville, CA 95076",
        "programs": "First Offender/18 Month",
        "contact": "Jessica Nichols",
        "phone": "(831) 728-2233",
        "fax": "(831) 728-0870",
        "url": "www.EncompassCS.org",
        "position": "36.9169428, -121.7670741",
        "lat": 36.9169428,
        "lng": -121.7670741,
        "location": {
          "lat": 36.9169428,
          "lon": -121.7670741
        }
      },
      {
        "key": "4400102120",
        "legal_name": "Encompass Community Services",
        "name": "Alto DDP",
        "address": "716 Ocean  Street, Suite 200",
        "city_state_zip": "Santa Cruz, CA 95060",
        "programs": "First Offender/18 Month",
        "contact": "Jessica Nichols",
        "phone": "(831) 423-2003",
        "fax": "(831) 454-0490",
        "url": "www.EncompassCS.org",
        "position": "36.9787071, -122.02061200000003",
        "lat": 36.9787071,
        "lng": -122.02061200000003,
        "location": {
          "lat": 36.9787071,
          "lon": -122.02061200000003
        }
      },
      {
        "key": "4400201120",
        "legal_name": "Janus of Santa Cruz",
        "name": "Janus DDP",
        "address": "200 7th  Avenue, Suite 150",
        "city_state_zip": "Santa Cruz, CA 95062",
        "programs": "First Offender/18 Month",
        "contact": "Jaime Campos",
        "phone": "(831) 462-5267",
        "fax": "(831) 462-4970",
        "url": "www.janussc.org",
        "position": "36.9641577, -121.99798620000001",
        "lat": 36.9641577,
        "lng": -121.99798620000001,
        "location": {
          "lat": 36.9641577,
          "lon": -121.99798620000001
        }
      },
      {
        "key": "4500201120",
        "legal_name": "Cascade Circle, Inc.",
        "name": "Cascade Circle, Inc.",
        "address": "3161 Bechelli Lane, Suite 204B",
        "city_state_zip": "Redding, CA 96002",
        "programs": "First Offender/18 Month",
        "contact": "Charles Horner",
        "phone": "(530) 222-8302",
        "fax": "(530) 222-5872",
        "url": "",
        "position": "40.5612601, -122.3620095",
        "lat": 40.5612601,
        "lng": -122.3620095,
        "location": {
          "lat": 40.5612601,
          "lon": -122.3620095
        }
      },
      {
        "key": "4500301100",
        "legal_name": "Wright Education Services",
        "name": "Wright Education Services",
        "address": "2660 Victor  Avenue",
        "city_state_zip": "Redding, CA 96002",
        "programs": "First Offender",
        "contact": "Christine Wright",
        "phone": "(530) 223-5122",
        "fax": "(530) 223-5652",
        "url": "www.wrighteducationservices.com",
        "position": "40.56879430000001, -122.33962930000001",
        "lat": 40.56879430000001,
        "lng": -122.33962930000001,
        "location": {
          "lat": 40.56879430000001,
          "lon": -122.33962930000001
        }
      },
      {
        "key": "4700201120",
        "legal_name": "Cascade Circle, Inc.",
        "name": "Cascade Circle, Inc.",
        "address": "490 S.  Broadway",
        "city_state_zip": "Yreka, CA 96097",
        "mailing_address": "3161 Bechelli Lane, Suite 204B",
        "mailing_city_state_zip": "Redding, CA 96002",
        "programs": "First Offender/18 Month",
        "contact": "Charles Horner",
        "phone": "(530) 222-8302",
        "fax": "(530) 222-5872",
        "url": "www.cascadecircle.org",
        "position": "41.7286303, -122.63704389999998",
        "lat": 41.7286303,
        "lng": -122.63704389999998,
        "location": {
          "lat": 41.7286303,
          "lon": -122.63704389999998
        }
      },
      {
        "key": "4700301120",
        "legal_name": "Karuk Tribe of California",
        "name": "Karuk Tribe DUI  Program",
        "address": "533 Jacobs Way",
        "city_state_zip": "Happy  Camp, CA 96039",
        "programs": "First Offender/18 Month",
        "contact": "Angela Baxter",
        "phone": "(530) 841-3141",
        "fax": "(530) 841-7125",
        "url": "www.karuk.us",
        "position": "41.8015471, -123.37646430000001",
        "lat": 41.8015471,
        "lng": -123.37646430000001,
        "location": {
          "lat": 41.8015471,
          "lon": -123.37646430000001
        }
      },
      {
        "key": "4700302120",
        "legal_name": "Karuk Tribe of California",
        "name": "Karuk Tribe DUI  Program",
        "address": "1515 S.  Oregon St.",
        "city_state_zip": "Yreka, CA 96097",
        "programs": "First Offender/18 Month",
        "contact": "Joseph Snapp",
        "phone": "(530) 841-3141",
        "fax": "(530) 841-7125",
        "url": "www.karuk.us",
        "position": "41.7177595, -122.6427175",
        "lat": 41.7177595,
        "lng": -122.6427175,
        "location": {
          "lat": 41.7177595,
          "lon": -122.6427175
        }
      },
      {
        "key": "4800101120",
        "legal_name": "A.K. Bean Foundation",
        "name": "A.K. Bean, Inc.",
        "address": "623 Great Jones Street",
        "city_state_zip": "Fairfield, CA 94533",
        "programs": "First Offender/18 Month",
        "contact": "Christine Soto",
        "phone": "(707) 429-8888",
        "fax": "(707) 429-1809",
        "email_contact": "",
        "position": "38.248796, -122.04886399999998",
        "lat": 38.248796,
        "lng": -122.04886399999998,
        "location": {
          "lat": 38.248796,
          "lon": -122.04886399999998
        }
      },
      {
        "key": "4800102120",
        "legal_name": "A.K. Bean Foundation",
        "name": "A.K. Bean, Inc.",
        "address": "2100 Sacramento Street",
        "city_state_zip": "Vallejo, CA 94590",
        "programs": "First Offender/18 Month",
        "contact": "Christine Soto",
        "phone": "(707) 642-8947",
        "fax": "(707) 642-8949",
        "email_contact": "",
        "position": "38.1173457, -122.25779590000002",
        "lat": 38.1173457,
        "lng": -122.25779590000002,
        "location": {
          "lat": 38.1173457,
          "lon": -122.25779590000002
        }
      },
      {
        "key": "4800103120",
        "legal_name": "A.K. Bean Foundation",
        "name": "A.K. Bean, Inc.",
        "address": "600 Nut Tree Road,  Suite 240",
        "city_state_zip": "Vacaville, CA 95687",
        "programs": "First Offender/18 Month",
        "contact": "Christine Soto",
        "phone": "(707) 451-9703",
        "fax": "(707) 446-0471",
        "email_contact": "",
        "position": "38.3613649, -121.94918330000002",
        "lat": 38.3613649,
        "lng": -121.94918330000002,
        "location": {
          "lat": 38.3613649,
          "lon": -121.94918330000002
        }
      },
      {
        "key": "4800201120",
        "legal_name": "Healthy Partnerships",
        "name": "Healthy Partnerships, Inc.",
        "address": "1286 Callen Street",
        "city_state_zip": "Vacaville, CA 95688",
        "programs": "First Offender/18 Month",
        "contact": "Charles Anderson",
        "phone": "(707) 447-8982",
        "fax": "(707) 447-3205",
        "url": "www.healthypartnerships.com",
        "position": "38.3601983, -121.97388460000002",
        "lat": 38.3601983,
        "lng": -121.97388460000002,
        "location": {
          "lat": 38.3601983,
          "lon": -121.97388460000002
        }
      },
      {
        "key": "4800202120",
        "legal_name": "Healthy Partnerships",
        "name": "Healthy Partnerships, Inc.",
        "address": "1735 Enterprise Drive, Building 1, Suite 105-A",
        "city_state_zip": "Fairfield, CA 94533",
        "programs": "First Offender/18 Month",
        "contact": "Charles Anderson",
        "phone": "(707) 425-1799",
        "fax": "(707) 425-1081",
        "url": "www.healthypartnerships.com",
        "position": "38.2425555, -122.06041160000001",
        "lat": 38.2425555,
        "lng": -122.06041160000001,
        "location": {
          "lat": 38.2425555,
          "lon": -122.06041160000001
        }
      },
      {
        "key": "4800301120",
        "legal_name": "Bi-Bett",
        "name": "Ia’Tik Recovery Center",
        "address": "604 Broadway Street",
        "city_state_zip": "Vallejo, CA 94590",
        "programs": "akbean2020@gmail.com",
        "contact": "Teresa Arellano",
        "phone": "(707) 558-0104",
        "fax": "(707) 558-8047",
        "email_contact": "iatikddp@comcast.net",
        "position": "38.1124137, -122.24823190000001",
        "lat": 38.1124137,
        "lng": -122.24823190000001,
        "location": {
          "lat": 38.1124137,
          "lon": -122.24823190000001
        }
      },
      {
        "key": "4900301120",
        "legal_name": "Sonoma County  Alcohol  And Other Drug Services",
        "name": "Sonoma County  Driving Under the Influence Progra m",
        "address": "1300 Coddingtown Center",
        "city_state_zip": "Santa Rosa, CA 95401",
        "programs": "First Offender/18 Month",
        "contact": "Cammie Noah",
        "phone": "(707) 565-7641",
        "fax": "(707) 565-7661",
        "url": "www.sonoma-county.org",
        "position": "38.455319, -122.73081400000001",
        "lat": 38.455319,
        "lng": -122.73081400000001,
        "location": {
          "lat": 38.455319,
          "lon": -122.73081400000001
        }
      },
      {
        "key": "5000201100",
        "legal_name": "Safety Center Incorporated",
        "name": "Safety Center, Inc. –  Stanislaus",
        "address": "2005 Evergreen  Avenue, Suite 350",
        "city_state_zip": "Modesto, CA 95350",
        "programs": "First Offender",
        "contact": "Karla Hendrix",
        "phone": "(209) 526-9393",
        "fax": "(209) 526-5060",
        "url": "www.safetycenter.org",
        "position": "37.6683999, -121.02782930000001",
        "lat": 37.6683999,
        "lng": -121.02782930000001,
        "location": {
          "lat": 37.6683999,
          "lon": -121.02782930000001
        }
      },
      {
        "key": "5000401023",
        "legal_name": "MHN Government Services, Inc.",
        "name": "Occupational Health Services,  Inc.",
        "address": "2260 Floyd  Avenue,  Suite 100",
        "city_state_zip": "Modesto, CA 95355",
        "programs": "18 Month/30 Month",
        "contact": "Pat Gonzales",
        "phone": "(209) 552-3581",
        "fax": "(209) 523-0429",
        "url": "www.duiprograms.ohs.mhn.com",
        "position": "37.6776158, -120.95493169999997",
        "lat": 37.6776158,
        "lng": -120.95493169999997,
        "location": {
          "lat": 37.6776158,
          "lon": -120.95493169999997
        }
      },
      {
        "key": "5100101120",
        "legal_name": "Midvalley Recovery Facilities, Incorporated",
        "name": "Pathways",
        "address": "430 Teegarden  Avenue",
        "city_state_zip": "Yuba City, CA 95991",
        "programs": "First Offender/18 Month",
        "contact": "Rebecca Cracknell",
        "phone": "(530) 674-4530",
        "fax": "(530) 674-4544",
        "url": "www.pathways.com",
        "position": "39.1382973, -121.6150682",
        "lat": 39.1382973,
        "lng": -121.6150682,
        "location": {
          "lat": 39.1382973,
          "lon": -121.6150682
        }
      },
      {
        "key": "5300201120",
        "legal_name": "Cascade Circle, Inc.",
        "name": "Cascade Circle, Inc.",
        "address": "1450 Main Street",
        "city_state_zip": "Weaverville, CA 96093",
        "mailing_address": "3161 Bechelli Lane, Suite 204B",
        "mailing_city_state_zip": "Redding, CA 96002",
        "programs": "First Offender/18 Month",
        "contact": "Charles Horner",
        "phone": "(530) 222-8302",
        "fax": "(530) 222-5872",
        "url": "www.cascadecircle.org",
        "position": "40.72617229999999, -122.9341804",
        "lat": 40.72617229999999,
        "lng": -122.9341804,
        "location": {
          "lat": 40.72617229999999,
          "lon": -122.9341804
        }
      },
      {
        "key": "5400201120",
        "legal_name": "Alternative Services, Inc.",
        "name": "Alternative Services, Inc.",
        "address": "2380 W. Whitendale  Avenue",
        "city_state_zip": "Visalia, CA 93277",
        "programs": "First Offender/18 Month",
        "contact": "Bobby Whitebird",
        "phone": "(559) 651-8090",
        "fax": "(559) 651-8099",
        "email_contact": "alternativeservices@rocketmail.com",
        "position": "36.30705520000001, -119.31653640000002",
        "lat": 36.30705520000001,
        "lng": -119.31653640000002,
        "location": {
          "lat": 36.30705520000001,
          "lon": -119.31653640000002
        }
      },
      {
        "key": "5400202120",
        "legal_name": "Alternative Services, Inc.",
        "name": "Alternative Services, Inc.",
        "address": "215 North D Street",
        "city_state_zip": "Porterville, CA 93257",
        "programs": "First Offender/18 Month",
        "contact": "Claire Horning",
        "phone": "(559) 783-2402",
        "fax": "(559) 782-4681",
        "email_contact": "alternativeservices@rocketmail.com",
        "position": "36.0694261, -119.01870559999998",
        "lat": 36.0694261,
        "lng": -119.01870559999998,
        "location": {
          "lat": 36.0694261,
          "lon": -119.01870559999998
        }
      },
      {
        "key": "5500301120",
        "legal_name": "Kings View",
        "name": "Kings View Community Services",
        "address": "14663 Mono Way",
        "city_state_zip": "Sonora, CA 95370",
        "mailing_address": "1410 F Street, Suite 101",
        "mailing_city_state_zip": "Fresno, CA 93706",
        "programs": "First Offender/18 Month",
        "contact": "Jennifer Montgomery",
        "phone": "(209) 532-0307",
        "fax": "(209) 532-9305",
        "url": "www.kingsview.org",
        "position": "37.9772416, -120.32294589999998",
        "lat": 37.9772416,
        "lng": -120.32294589999998,
        "location": {
          "lat": 37.9772416,
          "lon": -120.32294589999998
        }
      },
      {
        "key": "5600101120",
        "legal_name": "Ventura County Department Of Alcohol And Drug Programs",
        "name": "Ventura County DUI Program -Ventura",
        "address": "5850 Thille Street, Suite 105",
        "city_state_zip": "Ventura, CA 93003",
        "programs": "First Offender/18 Month",
        "contact": "John Rivera",
        "phone": "(805) 662-1840",
        "fax": "(805) 289-3288",
        "url": "www.vchca.org",
        "position": "34.2674588, -119.21429280000001",
        "lat": 34.2674588,
        "lng": -119.21429280000001,
        "location": {
          "lat": 34.2674588,
          "lon": -119.21429280000001
        }
      },
      {
        "key": "5600102120",
        "legal_name": "Ventura County Department Of Alcohol And Drug Programs",
        "name": "Ventura County DUI Program -Oxnard",
        "address": "1911 Williams Drive, Suite 190",
        "city_state_zip": "Oxnard, CA 93036",
        "programs": "First Offender/18 Month",
        "contact": "Jessica Davis",
        "phone": "(805) 981-9210",
        "fax": "(805) 981-9231",
        "url": "www.vchca.org",
        "position": "34.2195571, -119.1549804",
        "lat": 34.2195571,
        "lng": -119.1549804,
        "location": {
          "lat": 34.2195571,
          "lon": -119.1549804
        }
      },
      {
        "key": "5600103120",
        "legal_name": "Ventura County Department Of Alcohol And Drug Programs",
        "name": "Ventura County DUI Program -Simi Valley",
        "address": "3150 E. Los Angeles Avenue",
        "city_state_zip": "Simi Valley, CA 93065",
        "programs": "First Offender/18 Month",
        "contact": "Cris Ford",
        "phone": "(805) 520-0305",
        "fax": "(805) 577-1721",
        "url": "www.vchca.org",
        "position": "34.2713752, -118.73600570000002",
        "lat": 34.2713752,
        "lng": -118.73600570000002,
        "location": {
          "lat": 34.2713752,
          "lon": -118.73600570000002
        }
      },
      {
        "key": "5600104120",
        "legal_name": "Ventura County Department Of Alcohol And Drug Programs",
        "name": "Ventura County DUI Program – Thousand Oaks",
        "address": "125 West Thousand Oaks Boulevard, Suite 400",
        "city_state_zip": "Thousand Oaks, CA 91360",
        "programs": "First Offender/18 Month",
        "contact": "Sharon Gassett",
        "phone": "(805) 777-3506",
        "fax": "(805) 777-3515",
        "url": "www.vchca.org",
        "position": "34.179036, -118.88023140000001",
        "lat": 34.179036,
        "lng": -118.88023140000001,
        "location": {
          "lat": 34.179036,
          "lon": -118.88023140000001
        }
      },
      {
        "key": "5600105120",
        "legal_name": "Ventura County Department Of Alcohol And Drug Programs",
        "name": "Ventura County DUI Program –Fillmore",
        "address": "828 West Ventura Street, Suite 250",
        "city_state_zip": "Fillmore, CA 93015",
        "programs": "First Offender/18 Month",
        "contact": "Shahram Shafa",
        "phone": "(805) 981-2114",
        "fax": "(805) 524-8650",
        "url": "www.vchca.org",
        "position": "34.3954322, -118.92123040000001",
        "lat": 34.3954322,
        "lng": -118.92123040000001,
        "location": {
          "lat": 34.3954322,
          "lon": -118.92123040000001
        }
      },
      {
        "key": "5700201120",
        "legal_name": "Safety Center Incorporated",
        "name": "Safety Center, Inc.",
        "address": "520 Cottonwood Street,  Suite 6",
        "city_state_zip": "Woodland, CA 95695",
        "programs": "First Offender/18 Month",
        "contact": "Karla Hendrix",
        "phone": "(530) 406-2298",
        "fax": "(530) 406-2202",
        "url": "www.safetycenter.org",
        "position": "38.674997, -121.7940825",
        "lat": 38.674997,
        "lng": -121.7940825,
        "location": {
          "lat": 38.674997,
          "lon": -121.7940825
        }
      },
      {
        "key": "5700202120",
        "legal_name": "Safety Center Incorporated",
        "name": "Safety Center, Inc.",
        "address": "1450 Halyard, Suite 1A",
        "city_state_zip": "West Sacramento,  CA  95691",
        "programs": "First Offender/18 Month",
        "contact": "Karla Hendrix",
        "phone": "(916) 373-3363",
        "fax": "(916) 373-3364",
        "url": "www.safetycenter.org",
        "position": "38.5707399, -121.55084799999997",
        "lat": 38.5707399,
        "lng": -121.55084799999997,
        "location": {
          "lat": 38.5707399,
          "lon": -121.55084799999997
        }
      }
    ]
  }


// reduce(accumulator, currentElement, currentIndex, sourceArray)
const replacements =''
const transformedData = (data.providers.map((currentElement) => {
    const locationObject = {
        lat: currentElement.lat,
        lng: currentElement.lng
    }
    return { ...currentElement, newLocation: locationObject}
}))

let dataNew = JSON.stringify(transformedData)
fs.writeFileSync('dui_providers_new.json', dataNew);
// const obj = { name: 'Foo', age: 22 };
// const newObj = { ...obj, height: obj.age+2}
// console.log(newObj)
