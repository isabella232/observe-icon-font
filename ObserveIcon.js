/**
 * ObserveIcons icon set component.
 * Usage: <ObserveIcons name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set'
const glyphMap = {
  'fas_bacon': 59648,
  'fas_balance_scale': 59649,
  'fas_bell': 59650,
  'fas_blender': 59651,
  'fas_cheese': 59652,
  'fas_couch': 59653,
  'fas_fish': 59654,
  'fas_key': 59655,
  'fas_long_arrow-alt-right': 59656,
  'fas_motorcycle': 59657,
  'fas_paint_roller': 59658,
  'fas_people_carry': 59659,
  'fas_pepper_hot': 59660,
  'fas_plane_departure': 59661,
  'fas_print': 59662,
  'fas_solar_panel': 59663,
  'fas_warehouse': 59664,
  'iD_highway_motorway': 59684,
  'iD_highway_primary': 59688,
  'iD_highway_secondary': 59697,
  'iD_highway_service': 59698,
  'iD_highway_tertiary': 59704,
  'iD_highway_trunk': 59709,
  'iD_highway_unclassified': 59710,
  'iD_other_line': 59721,
  'iD_restriction_only-left-turn': 59748,
  'iD_restriction_only-right-turn': 59749,
  'iD_restriction_only-straight-on': 59750,
  'iD_restriction_only-u-turn': 59751,
  'iD_restriction': 59752,
  'iD_waterway_canal': 59812,
  'maki_aerialway': 59819,
  'maki_airfield': 59820,
  'maki_airport': 59821,
  'maki_alcohol_shop': 59822,
  'maki_american_football': 59823,
  'maki_amusement_park': 59824,
  'maki_aquarium': 59825,
  'maki_art_gallery': 59826,
  'maki_attraction': 59827,
  'maki_bakery': 59828,
  'maki_bank_jp': 59829,
  'maki_bank': 59830,
  'maki_bar': 59831,
  'maki_barrier': 59832,
  'maki_baseball': 59833,
  'maki_basketball': 59834,
  'maki_bbq': 59835,
  'maki_beach': 59836,
  'maki_beer': 59837,
  'maki_bicycle_share': 59838,
  'maki_bicycle': 59839,
  'maki_blood_bank': 59840,
  'maki_bowling_alley': 59841,
  'maki_bridge': 59842,
  'maki_building_alt1': 59843,
  'maki_building': 59844,
  'maki_bus': 59845,
  'maki_cafe': 59846,
  'maki_campsite': 59847,
  'maki_car_rental': 59848,
  'maki_car_repair': 59849,
  'maki_car': 59850,
  'maki_casino': 59851,
  'maki_castle_jp': 59852,
  'maki_castle': 59853,
  'maki_cemetery_jp': 59854,
  'maki_cemetery': 59855,
  'maki_charging_station': 59856,
  'maki_cinema': 59857,
  'maki_circle_stroked': 59858,
  'maki_circle': 59859,
  'maki_city': 59860,
  'maki_clothing_store': 59861,
  'maki_college_jp': 59862,
  'maki_college': 59863,
  'maki_commercial': 59864,
  'maki_communications_tower': 59865,
  'maki_confectionery': 59866,
  'maki_convenience': 59867,
  'maki_cricket': 59868,
  'maki_cross': 59869,
  'maki_dam': 59870,
  'maki_danger': 59871,
  'maki_defibrillator': 59872,
  'maki_dentist': 59873,
  'maki_doctor': 59874,
  'maki_dog_park': 59875,
  'maki_drinking_water': 59876,
  'maki_embassy': 59877,
  'maki_emergency_phone': 59878,
  'maki_entrance_alt1': 59879,
  'maki_entrance': 59880,
  'maki_farm': 59881,
  'maki_fast_food': 59882,
  'maki_fence': 59883,
  'maki_ferry': 59884,
  'maki_fire_station-jp': 59885,
  'maki_fire_station': 59886,
  'maki_fitness_centre': 59887,
  'maki_florist': 59888,
  'maki_fuel': 59889,
  'maki_furniture': 59890,
  'maki_gaming': 59891,
  'maki_garden_centre': 59892,
  'maki_garden': 59893,
  'maki_gift': 59894,
  'maki_globe': 59895,
  'maki_golf': 59896,
  'maki_grocery': 59897,
  'maki_hairdresser': 59898,
  'maki_harbor': 59899,
  'maki_hardware': 59900,
  'maki_heart': 59901,
  'maki_heliport': 59902,
  'maki_home': 59903,
  'maki_horse_riding': 59904,
  'maki_hospital_jp': 59905,
  'maki_hospital': 59906,
  'maki_ice_cream': 59907,
  'maki_industry': 59908,
  'maki_information': 59909,
  'maki_jewelry_store': 59910,
  'maki_karaoke': 59911,
  'maki_landmark_jp': 59912,
  'maki_landmark': 59913,
  'maki_landuse': 59914,
  'maki_laundry': 59915,
  'maki_library': 59916,
  'maki_lighthouse': 59917,
  'maki_lodging': 59918,
  'maki_logging': 59919,
  'maki_marker_stroked': 59920,
  'maki_marker': 59921,
  'maki_mobile_phone': 59922,
  'maki_monument': 59923,
  'maki_mountain': 59924,
  'maki_museum': 59925,
  'maki_music': 59926,
  'maki_natural': 59927,
  'maki_optician': 59928,
  'maki_paint': 59929,
  'maki_park_alt1': 59930,
  'maki_park': 59931,
  'maki_parking_garage': 59932,
  'maki_parking': 59933,
  'maki_pharmacy': 59934,
  'maki_picnic_site': 59935,
  'maki_pitch': 59936,
  'maki_place_of-worship': 59937,
  'maki_playground': 59938,
  'maki_police_jp': 59939,
  'maki_police': 59940,
  'maki_post_jp': 59941,
  'maki_post': 59942,
  'maki_prison': 59943,
  'maki_rail_light': 59944,
  'maki_rail_metro': 59945,
  'maki_rail': 59946,
  'maki_ranger_station': 59947,
  'maki_recycling': 59948,
  'maki_religious_buddhist': 59949,
  'maki_religious_christian': 59950,
  'maki_religious_jewish': 59951,
  'maki_religious_muslim': 59952,
  'maki_religious_shinto': 59953,
  'maki_residential_community': 59954,
  'maki_restaurant_noodle': 59955,
  'maki_restaurant_pizza': 59956,
  'maki_restaurant_seafood': 59957,
  'maki_restaurant': 59958,
  'maki_roadblock': 59959,
  'maki_rocket': 59960,
  'maki_school_jp': 59961,
  'maki_school': 59962,
  'maki_scooter': 59963,
  'maki_shelter': 59964,
  'maki_shoe': 59965,
  'maki_shop': 59966,
  'maki_skateboard': 59967,
  'maki_skiing': 59968,
  'maki_slaughterhouse': 59969,
  'maki_slipway': 59970,
  'maki_snowmobile': 59971,
  'maki_soccer': 59972,
  'maki_square_stroked': 59973,
  'maki_square': 59974,
  'maki_stadium': 59975,
  'maki_star_stroked': 59976,
  'maki_star': 59977,
  'maki_suitcase': 59978,
  'maki_sushi': 59979,
  'maki_swimming': 59980,
  'maki_table_tennis': 59981,
  'maki_teahouse': 59982,
  'maki_telephone': 59983,
  'maki_tennis': 59984,
  'maki_theatre': 59985,
  'maki_toilet': 59986,
  'maki_town_hall': 59987,
  'maki_town': 59988,
  'maki_triangle_stroked': 59989,
  'maki_triangle': 59990,
  'maki_veterinary': 59991,
  'maki_viewpoint': 59992,
  'maki_village': 59993,
  'maki_volcano': 59994,
  'maki_volleyball': 59995,
  'maki_warehouse': 59996,
  'maki_waste_basket': 59997,
  'maki_watch': 59998,
  'maki_water': 59999,
  'maki_waterfall': 60000,
  'maki_watermill': 60001,
  'maki_wetland': 60002,
  'maki_wheelchair': 60003,
  'maki_windmill': 60004,
  'maki_zoo': 60005,
  'temaki_abseiling': 60006,
  'temaki_accounting': 60007,
  'temaki_amusement_park': 60008,
  'temaki_antenna': 60009,
  'temaki_archery': 60010,
  'temaki_atm': 60011,
  'temaki_balloon': 60012,
  'temaki_beach': 60013,
  'temaki_beauty_salon': 60014,
  'temaki_bench': 60015,
  'temaki_binoculars': 60016,
  'temaki_blind': 60017,
  'temaki_boat_ramp': 60018,
  'temaki_boat_tour': 60019,
  'temaki_boating': 60020,
  'temaki_book_store': 60021,
  'temaki_bottles': 60022,
  'temaki_boulder1': 60023,
  'temaki_boulder2': 60024,
  'temaki_boulder3': 60025,
  'temaki_bowling_alt1': 60026,
  'temaki_bowling': 60027,
  'temaki_buffer_stop': 60028,
  'temaki_bulb': 60029,
  'temaki_bulb2': 60030,
  'temaki_bulb3': 60031,
  'temaki_bulldozer': 60032,
  'temaki_cairn': 60033,
  'temaki_canoe': 60034,
  'temaki_car_dealer': 60035,
  'temaki_car_wash': 60036,
  'temaki_casino': 60037,
  'temaki_chairlift': 60038,
  'temaki_chimney': 60039,
  'temaki_chocolate': 60040,
  'temaki_climbing': 60041,
  'temaki_clock': 60042,
  'temaki_clothes_hanger': 60043,
  'temaki_compass': 60044,
  'temaki_courthouse': 60045,
  'temaki_crane': 60046,
  'temaki_cross_country_skiing': 60047,
  'temaki_diamond': 60048,
  'temaki_dice': 60049,
  'temaki_disc_golf_basket': 60050,
  'temaki_diving': 60051,
  'temaki_donut': 60052,
  'temaki_ear': 60053,
  'temaki_electronic': 60054,
  'temaki_elevator': 60055,
  'temaki_fashion_accessories': 60056,
  'temaki_fire_hydrant': 60057,
  'temaki_fish_cleaning': 60058,
  'temaki_fishing_pier': 60059,
  'temaki_florist': 60060,
  'temaki_food': 60061,
  'temaki_fountain': 60062,
  'temaki_furniture': 60063,
  'temaki_gas': 60064,
  'temaki_golf_cart': 60065,
  'temaki_guard_rail': 60066,
  'temaki_gym': 60067,
  'temaki_hair_care': 60068,
  'temaki_hand': 60069,
  'temaki_handbag': 60070,
  'temaki_hang_gliding': 60071,
  'temaki_hearing_aid': 60072,
  'temaki_hinduism': 60073,
  'temaki_horseshoes': 60074,
  'temaki_ice_fishing': 60075,
  'temaki_ice_skating': 60076,
  'temaki_inline_skating': 60077,
  'temaki_jet_skiing': 60078,
  'temaki_jewelry_store': 60079,
  'temaki_junction': 60080,
  'temaki_kayaking': 60081,
  'temaki_kerb_flush': 60082,
  'temaki_kerb_lowered': 60083,
  'temaki_kerb_raised': 60084,
  'temaki_kerb_rolled': 60085,
  'temaki_kitchen_sink': 60086,
  'temaki_laundry': 60087,
  'temaki_lawyer': 60088,
  'temaki_letter_box': 60089,
  'temaki_library': 60090,
  'temaki_lift_gate': 60091,
  'temaki_light_rail': 60092,
  'temaki_lipstick': 60093,
  'temaki_lock': 60094,
  'temaki_milestone': 60095,
  'temaki_military': 60096,
  'temaki_money_hand': 60097,
  'temaki_monorail': 60098,
  'temaki_movie_rental': 60099,
  'temaki_museum': 60100,
  'temaki_pedestrian': 60101,
  'temaki_perfume': 60102,
  'temaki_pet_store': 60103,
  'temaki_pharmacy': 60104,
  'temaki_physiotherapist': 60105,
  'temaki_pin': 60106,
  'temaki_pipe': 60107,
  'temaki_plumber': 60108,
  'temaki_post_box': 60109,
  'temaki_power_tower': 60110,
  'temaki_power': 60111,
  'temaki_psychic': 60112,
  'temaki_radiation': 60113,
  'temaki_radio': 60114,
  'temaki_rafting': 60115,
  'temaki_railing': 60116,
  'temaki_railway_signals': 60117,
  'temaki_real_estate_agency': 60118,
  'temaki_roller_coaster': 60119,
  'temaki_ruins': 60120,
  'temaki_rv_park': 60121,
  'temaki_sailing': 60122,
  'temaki_sandwich': 60123,
  'temaki_school': 60124,
  'temaki_scuba_diving': 60125,
  'temaki_security_camera': 60126,
  'temaki_shinto': 60127,
  'temaki_shopping_mall': 60128,
  'temaki_shower': 60129,
  'temaki_shuffleboard': 60130,
  'temaki_sikhism': 60131,
  'temaki_silo': 60132,
  'temaki_skateboarding': 60133,
  'temaki_ski_jumping': 60134,
  'temaki_skiing': 60135,
  'temaki_sledding': 60136,
  'temaki_snow_shoeing': 60137,
  'temaki_snow': 60138,
  'temaki_snowboarding': 60139,
  'temaki_snowmobile': 60140,
  'temaki_social_facility': 60141,
  'temaki_spa': 60142,
  'temaki_speaker': 60143,
  'temaki_stop': 60144,
  'temaki_storage_tank': 60145,
  'temaki_storage': 60146,
  'temaki_subway': 60147,
  'temaki_surfing': 60148,
  'temaki_swamp': 60149,
  'temaki_tanning': 60150,
  'temaki_tanning2': 60151,
  'temaki_taoism': 60152,
  'temaki_taxi_stand': 60153,
  'temaki_telephone': 60154,
  'temaki_temaki': 60155,
  'temaki_tennis': 60156,
  'temaki_tire': 60157,
  'temaki_toolbox': 60158,
  'temaki_tools': 60159,
  'temaki_tower': 60160,
  'temaki_traffic_signals': 60161,
  'temaki_tram': 60162,
  'temaki_transit': 60163,
  'temaki_travel_agency': 60164,
  'temaki_trolleybus': 60165,
  'temaki_truck': 60166,
  'temaki_utility_pole': 60167,
  'temaki_vacuum': 60168,
  'temaki_vending_machine': 60169,
  'temaki_vending_newspaper': 60170,
  'temaki_vertex': 60171,
  'temaki_veterinary_care': 60172,
  'temaki_wall': 60173,
  'temaki_waterskiing': 60174,
  'temaki_whale_watching': 60175,
  'temaki_wheelchair': 60176,
  'temaki_wind_surfing': 60177,
  'temaki_wind_turbine': 60178,
  'temaki_windmill': 60179,
  'temaki_window': 60180,
  'temaki_yield': 60181,
  'temaki_zoo': 60182
}

const iconSet = createIconSet(glyphMap, 'ObserveIcons', 'ObserveIcons.ttf')

export default iconSet

export const Button = iconSet.Button
export const TabBarItem = iconSet.TabBarItem
export const TabBarItemIOS = iconSet.TabBarItemIOS
export const ToolbarAndroid = iconSet.ToolbarAndroid
export const getImageSource = iconSet.getImageSource
