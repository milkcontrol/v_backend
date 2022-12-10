'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'districts',
        [{
          "districtId": 2264,
          "provinceID": 269,
          "name": "Huyện Xi Ma Cai",
          "code": "0802",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2171,
          "provinceID": 269,
          "name": "Huyện Mường Khương",
          "code": "0809",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2073,
          "provinceID": 269,
          "name": "Huyện Bảo Thắng",
          "code": "0804",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2043,
          "provinceID": 269,
          "name": "Huyện Văn Bàn",
          "code": "0806",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2005,
          "provinceID": 269,
          "name": "Thị xã Sa Pa",
          "code": "0805",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1892,
          "provinceID": 269,
          "name": "Huyện Bắc Hà",
          "code": "0808",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1891,
          "provinceID": 269,
          "name": "Huyện Bảo Yên",
          "code": "0807",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1744,
          "provinceID": 269,
          "name": "Huyện Bát Xát",
          "code": "0803",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1682,
          "provinceID": 269,
          "name": "Thành phố Lào Cai",
          "code": "0801",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3451,
          "provinceID": 268,
          "name": "Quận Đặc Biệt",
          "code": "9505",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2194,
          "provinceID": 268,
          "name": "Huyện Phù Cừ",
          "code": "2207",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2046,
          "provinceID": 268,
          "name": "Huyện Văn Lâm",
          "code": "2209",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2045,
          "provinceID": 268,
          "name": "Huyện Văn Giang",
          "code": "2210",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2018,
          "provinceID": 268,
          "name": "Huyện Tiên Lữ",
          "code": "2206",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1828,
          "provinceID": 268,
          "name": "Huyện Yên Mỹ",
          "code": "2205",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1827,
          "provinceID": 268,
          "name": "Thị xã Mỹ Hào",
          "code": "2208",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1826,
          "provinceID": 268,
          "name": "Huyện Khoái Châu",
          "code": "2204",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1825,
          "provinceID": 268,
          "name": "Huyện Ân Thi",
          "code": "2203",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1717,
          "provinceID": 268,
          "name": "Huyện Kim Động",
          "code": "2202",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1680,
          "provinceID": 268,
          "name": "Thành phố Hưng Yên",
          "code": "2201",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2270,
          "provinceID": 267,
          "name": "Huyện Yên Thủy",
          "code": "2310",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2163,
          "provinceID": 267,
          "name": "Huyện Mai Châu",
          "code": "2303",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2157,
          "provinceID": 267,
          "name": "Huyện Lạc Thủy",
          "code": "2309",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2156,
          "provinceID": 267,
          "name": "Huyện Lạc Sơn",
          "code": "2305",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2146,
          "provinceID": 267,
          "name": "Huyện Kim Bôi",
          "code": "2308",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2087,
          "provinceID": 267,
          "name": "Huyện Cao Phong",
          "code": "2311",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2014,
          "provinceID": 267,
          "name": "Huyện Tân Lạc",
          "code": "2304",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1968,
          "provinceID": 267,
          "name": "Huyện Lương Sơn",
          "code": "2307",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1955,
          "provinceID": 267,
          "name": "Huyện Kỳ Sơn",
          "code": "2306",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1916,
          "provinceID": 267,
          "name": "Huyện Đà Bắc",
          "code": "2302",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1678,
          "provinceID": 267,
          "name": "Thành phố Hòa Bình",
          "code": "2301",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3266,
          "provinceID": 266,
          "name": "huyện Sốp Cộp",
          "code": "1411",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3230,
          "provinceID": 266,
          "name": "Huyện Mường La",
          "code": "1403",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2267,
          "provinceID": 266,
          "name": "Huyện Yên Châu",
          "code": "1408",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2255,
          "provinceID": 266,
          "name": "Huyện Vân Hồ",
          "code": "1412",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2204,
          "provinceID": 266,
          "name": "Huyện Quỳnh Nhai",
          "code": "1402",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2079,
          "provinceID": 266,
          "name": "Huyện Bắc Yên",
          "code": "1405",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2032,
          "provinceID": 266,
          "name": "Huyện Thuận Châu",
          "code": "1404",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2007,
          "provinceID": 266,
          "name": "Huyện Sông Mã",
          "code": "1409",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1996,
          "provinceID": 266,
          "name": "Huyện Phù Yên",
          "code": "1406",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1976,
          "provinceID": 266,
          "name": "Huyện Mộc Châu",
          "code": "1410",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1971,
          "provinceID": 266,
          "name": "Huyện Mai Sơn",
          "code": "1407",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1677,
          "provinceID": 266,
          "name": "Thành phố Sơn La",
          "code": "1401",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2179,
          "provinceID": 265,
          "name": "Huyện Nậm Pồ",
          "code": "6210",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2170,
          "provinceID": 265,
          "name": "Huyện Mường Ảng",
          "code": "6209",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2123,
          "provinceID": 265,
          "name": "Huyện Điện Biên Đông",
          "code": "6207",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2060,
          "provinceID": 265,
          "name": "Thị xã Mường Lay",
          "code": "6202",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2022,
          "provinceID": 265,
          "name": "Huyện Tuần Giáo",
          "code": "6204",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2021,
          "provinceID": 265,
          "name": "Huyện Tủa Chùa",
          "code": "6206",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1979,
          "provinceID": 265,
          "name": "Huyện Mường Nhé",
          "code": "6208",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1978,
          "provinceID": 265,
          "name": "Huyện Mường Chà",
          "code": "6205",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1923,
          "provinceID": 265,
          "name": "Huyện Điện Biên",
          "code": "6203",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1676,
          "provinceID": 265,
          "name": "Thành phố Điện Biên Phủ",
          "code": "6201",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2025,
          "provinceID": 264,
          "name": "Huyện Than Uyên",
          "code": "0706",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2017,
          "provinceID": 264,
          "name": "Huyện Tân Uyên",
          "code": "0707",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2010,
          "provinceID": 264,
          "name": "Huyện Tam Đường",
          "code": "0702",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2006,
          "provinceID": 264,
          "name": "Huyện Sìn Hồ",
          "code": "0704",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1989,
          "provinceID": 264,
          "name": "Huyện Phong Thổ",
          "code": "0703",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1984,
          "provinceID": 264,
          "name": "Huyện Nậm Nhùn",
          "code": "0708",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1980,
          "provinceID": 264,
          "name": "Huyện Mường Tè",
          "code": "0705",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1675,
          "provinceID": 264,
          "name": "Thành phố Lai Châu",
          "code": "0701",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2266,
          "provinceID": 263,
          "name": "Huyện Yên Bình",
          "code": "1304",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2248,
          "provinceID": 263,
          "name": "Huyện Trạm Tấu",
          "code": "1308",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2063,
          "provinceID": 263,
          "name": "Thị xã Nghĩa Lộ",
          "code": "1302",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2047,
          "provinceID": 263,
          "name": "Huyện Văn Yên",
          "code": "1303",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2044,
          "provinceID": 263,
          "name": "Huyện Văn Chấn",
          "code": "1306",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2039,
          "provinceID": 263,
          "name": "Huyện Trấn Yên",
          "code": "1307",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1977,
          "provinceID": 263,
          "name": "Huyện Mù Cang Chải",
          "code": "1305",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1967,
          "provinceID": 263,
          "name": "Huyện Lục Yên",
          "code": "1309",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1674,
          "provinceID": 263,
          "name": "Thành phố Yên Bái",
          "code": "1301",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3312,
          "provinceID": 262,
          "name": "Huyện Vân Canh",
          "code": "3709",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3279,
          "provinceID": 262,
          "name": "Huyện Tây Sơn",
          "code": "3708",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3254,
          "provinceID": 262,
          "name": "Huyện Phù Mỹ",
          "code": "3705",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2258,
          "provinceID": 262,
          "name": "Huyện Vĩnh Thạnh",
          "code": "3707",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2140,
          "provinceID": 262,
          "name": "Huyện Hoài Ân",
          "code": "3703",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2023,
          "provinceID": 262,
          "name": "Huyện Tuy Phước",
          "code": "3711",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1886,
          "provinceID": 262,
          "name": "Huyện An Lão",
          "code": "3702",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1771,
          "provinceID": 262,
          "name": "Thị xã Hoài Nhơn",
          "code": "3704",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1770,
          "provinceID": 262,
          "name": "Huyện Phù Cát",
          "code": "3706",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1769,
          "provinceID": 262,
          "name": "Thị xã An Nhơn",
          "code": "3710",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1662,
          "provinceID": 262,
          "name": "Thành phố Quy Nhơn",
          "code": "3701",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3302,
          "provinceID": 261,
          "name": "Huyện Thuận Nam",
          "code": "4507",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3301,
          "provinceID": 261,
          "name": "Huyện Thuận Bắc",
          "code": "4506",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3129,
          "provinceID": 261,
          "name": "Huyện Bác Ái",
          "code": "4505",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1986,
          "provinceID": 261,
          "name": "Huyện Ninh Phước",
          "code": "4504",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1985,
          "provinceID": 261,
          "name": "Huyện Ninh Hải",
          "code": "4503",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1855,
          "provinceID": 261,
          "name": "Huyện Ninh Sơn",
          "code": "4502",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1665,
          "provinceID": 261,
          "name": "Thành phố Phan Rang – Tháp Chàm",
          "code": "4501",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3284,
          "provinceID": 260,
          "name": "Huyện Tuy An",
          "code": "3904",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3278,
          "provinceID": 260,
          "name": "Huyện Tây Hòa",
          "code": "3909",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3186,
          "provinceID": 260,
          "name": "Huyện Đồng Xuân",
          "code": "3902",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3184,
          "provinceID": 260,
          "name": "Thị xã Đông Hòa",
          "code": "3907",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2211,
          "provinceID": 260,
          "name": "Huyện Sơn Hòa",
          "code": "3905",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2206,
          "provinceID": 260,
          "name": "Huyện Sông Hinh",
          "code": "3906",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1993,
          "provinceID": 260,
          "name": "Huyện Phú Hòa",
          "code": "3908",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1856,
          "provinceID": 260,
          "name": "Thị Xã Sông Cầu",
          "code": "3903",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1663,
          "provinceID": 260,
          "name": "Thành phố Tuy Hòa",
          "code": "3901",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3446,
          "provinceID": 259,
          "name": "Huyện Ia H Drai",
          "code": "3610",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2225,
          "provinceID": 259,
          "name": "Huyện Tu Mơ Rông",
          "code": "3609",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2205,
          "provinceID": 259,
          "name": "Huyện Sa Thầy",
          "code": "3605",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2187,
          "provinceID": 259,
          "name": "Huyện Ngọc Hồi",
          "code": "3603",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2148,
          "provinceID": 259,
          "name": "Huyện Kon Rẫy",
          "code": "3608",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2121,
          "provinceID": 259,
          "name": "Huyện Đắk Tô",
          "code": "3604",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1921,
          "provinceID": 259,
          "name": "Huyện Đắk Glei",
          "code": "3602",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1835,
          "provinceID": 259,
          "name": "Huyện Đắk Hà",
          "code": "3607",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1834,
          "provinceID": 259,
          "name": "Huyện Kon Plông",
          "code": "3606",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1660,
          "provinceID": 259,
          "name": "Thành phố Kon Tum",
          "code": "3601",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3196,
          "provinceID": 258,
          "name": "Huyện Hàm Tân",
          "code": "4706",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2116,
          "provinceID": 258,
          "name": "Huyện đảo Phú Quý",
          "code": "4709",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2012,
          "provinceID": 258,
          "name": "Huyện Tánh Linh",
          "code": "4708",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1781,
          "provinceID": 258,
          "name": "Huyện Tuy Phong",
          "code": "4702",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1780,
          "provinceID": 258,
          "name": "Huyện Bắc Bình",
          "code": "4703",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1779,
          "provinceID": 258,
          "name": "Huyện Đức Linh",
          "code": "4707",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1778,
          "provinceID": 258,
          "name": "Thị xã La Gi",
          "code": "4710",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1777,
          "provinceID": 258,
          "name": "Huyện Hàm Thuận Bắc",
          "code": "4704",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1776,
          "provinceID": 258,
          "name": "Huyện Hàm Thuận Nam",
          "code": "4705",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1666,
          "provinceID": 258,
          "name": "Thành phố Phan Thiết",
          "code": "4701",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2050,
          "provinceID": 253,
          "name": "Huyện Vĩnh Lợi",
          "code": "6002",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1998,
          "provinceID": 253,
          "name": "Huyện Phước Long",
          "code": "6005",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1946,
          "provinceID": 253,
          "name": "Huyện Hồng Dân",
          "code": "6003",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1935,
          "provinceID": 253,
          "name": "Thị Xã Giá Rai",
          "code": "6004",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1926,
          "provinceID": 253,
          "name": "Huyện Đông Hải",
          "code": "6006",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1723,
          "provinceID": 253,
          "name": "Huyện Hòa Bình",
          "code": "6007",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1655,
          "provinceID": 253,
          "name": "Thành phố Bạc Liêu",
          "code": "6001",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2186,
          "provinceID": 252,
          "name": "Huyện Ngọc Hiển",
          "code": "6107",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2042,
          "provinceID": 252,
          "name": "Huyện U Minh",
          "code": "6103",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2038,
          "provinceID": 252,
          "name": "Huyện Trần Văn Thời",
          "code": "6104",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1922,
          "provinceID": 252,
          "name": "Huyện Đầm Dơi",
          "code": "6106",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1901,
          "provinceID": 252,
          "name": "Huyện Cái Nước",
          "code": "6105",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1883,
          "provinceID": 252,
          "name": "Huyện Phú Tân",
          "code": "6109",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1783,
          "provinceID": 252,
          "name": "Huyện Năm Căn",
          "code": "6108",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1782,
          "provinceID": 252,
          "name": "Huyện Thới Bình",
          "code": "6102",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1654,
          "provinceID": 252,
          "name": "Thành phố Cà Mau",
          "code": "6101",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3445,
          "provinceID": 250,
          "name": "Huyện Long Mỹ",
          "code": "6403",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3218,
          "provinceID": 250,
          "name": "Thị xã Long Mỹ",
          "code": "6408",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2096,
          "provinceID": 250,
          "name": "Huyện Châu Thành",
          "code": "6405",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2048,
          "provinceID": 250,
          "name": "Huyện Vị Thuỷ",
          "code": "6402",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1912,
          "provinceID": 250,
          "name": "Huyện Châu Thành A",
          "code": "6406",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1824,
          "provinceID": 250,
          "name": "Huyện Phụng Hiệp",
          "code": "6404",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1823,
          "provinceID": 250,
          "name": "Thành phố Ngã Bảy",
          "code": "6407",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1653,
          "provinceID": 250,
          "name": "Thành phố Vị Thanh",
          "code": "6401",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1969,
          "provinceID": 249,
          "name": "Huyện Lương Tài",
          "code": "1908",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1768,
          "provinceID": 249,
          "name": "Huyện Yên Phong",
          "code": "1902",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1767,
          "provinceID": 249,
          "name": "Huyện Thuận Thành",
          "code": "1906",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1766,
          "provinceID": 249,
          "name": "Huyện Gia Bình",
          "code": "1907",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1730,
          "provinceID": 249,
          "name": "Thị xã Từ Sơn",
          "code": "1905",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1729,
          "provinceID": 249,
          "name": "Huyện Tiên Du",
          "code": "1904",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1728,
          "provinceID": 249,
          "name": "Huyện Quế Võ",
          "code": "1903",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1644,
          "provinceID": 249,
          "name": "Thành phố Bắc Ninh",
          "code": "1901",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1966,
          "provinceID": 248,
          "name": "Huyện Lục Ngạn",
          "code": "1803",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1965,
          "provinceID": 248,
          "name": "Huyện Lục Nam",
          "code": "1805",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1765,
          "provinceID": 248,
          "name": "Huyện Yên Thế",
          "code": "1802",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1764,
          "provinceID": 248,
          "name": "Huyện Yên Dũng",
          "code": "1810",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1763,
          "provinceID": 248,
          "name": "Huyện Việt Yên",
          "code": "1809",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1762,
          "provinceID": 248,
          "name": "Huyện Tân Yên",
          "code": "1806",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1761,
          "provinceID": 248,
          "name": "Huyện Sơn Động",
          "code": "1804",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1760,
          "provinceID": 248,
          "name": "Huyện Lạng Giang",
          "code": "1808",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1759,
          "provinceID": 248,
          "name": "Huyện Hiệp Hòa",
          "code": "1807",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1643,
          "provinceID": 248,
          "name": "Thành phố Bắc Giang",
          "code": "1801",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3311,
          "provinceID": 247,
          "name": "Huyện Văn Quan",
          "code": "1006",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3310,
          "provinceID": 247,
          "name": "Huyện Văn Lãng",
          "code": "1004",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3182,
          "provinceID": 247,
          "name": "Huyện Đình Lập",
          "code": "1010",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3156,
          "provinceID": 247,
          "name": "Huyện Chi Lăng",
          "code": "1009",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3138,
          "provinceID": 247,
          "name": "Huyện Bình Gia",
          "code": "1003",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3134,
          "provinceID": 247,
          "name": "Huyện Bắc Sơn",
          "code": "1005",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2036,
          "provinceID": 247,
          "name": "Huyện Tràng Định",
          "code": "1002",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1963,
          "provinceID": 247,
          "name": "Huyện Lộc Bình",
          "code": "1008",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1948,
          "provinceID": 247,
          "name": "Huyện Hữu Lũng",
          "code": "1011",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1904,
          "provinceID": 247,
          "name": "Huyện Cao Lộc",
          "code": "1007",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1642,
          "provinceID": 247,
          "name": "Thành phố Lạng Sơn",
          "code": "1001",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3694,
          "provinceID": 246,
          "name": "Huyện Quảng Hòa",
          "code": "3694",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3305,
          "provinceID": 246,
          "name": "Huyện Trà Lĩnh",
          "code": "0605",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3299,
          "provinceID": 246,
          "name": "Huyện Thông Nông",
          "code": "0603",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3289,
          "provinceID": 246,
          "name": "Huyện Thạch An",
          "code": "0610",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3259,
          "provinceID": 246,
          "name": "Huyện Quảng Uyên",
          "code": "0609",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3246,
          "provinceID": 246,
          "name": "Huyện Nguyên Bình",
          "code": "0607",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3194,
          "provinceID": 246,
          "name": "Huyện Hạ Lang",
          "code": "0611",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3130,
          "provinceID": 246,
          "name": "Huyện Bảo Lạc",
          "code": "0602",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2041,
          "provinceID": 246,
          "name": "Huyện Trùng Khánh",
          "code": "0606",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1997,
          "provinceID": 246,
          "name": "Huyện Phục Hòa",
          "code": "0613",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1943,
          "provinceID": 246,
          "name": "Huyện Hòa An",
          "code": "0608",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1939,
          "provinceID": 246,
          "name": "Huyện Hà Quảng",
          "code": "0604",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1890,
          "provinceID": 246,
          "name": "Huyện Bảo Lâm",
          "code": "0612",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1641,
          "provinceID": 246,
          "name": "Thành phố Cao Bằng",
          "code": "0601",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3249,
          "provinceID": 245,
          "name": "Huyện Pác Nặm",
          "code": "1108",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3242,
          "provinceID": 245,
          "name": "Huyện Ngân Sơn",
          "code": "1105",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3232,
          "provinceID": 245,
          "name": "Huyện Na Rì",
          "code": "1104",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1914,
          "provinceID": 245,
          "name": "Huyện Chợ Mới",
          "code": "1107",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1913,
          "provinceID": 245,
          "name": "Huyện Chợ Đồn",
          "code": "1102",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1889,
          "provinceID": 245,
          "name": "Huyện Bạch Thông",
          "code": "1103",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1887,
          "provinceID": 245,
          "name": "Huyện Ba Bể",
          "code": "1106",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1640,
          "provinceID": 245,
          "name": "Thành phố Bắc Kạn",
          "code": "1101",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2195,
          "provinceID": 244,
          "name": "Huyện Phú Lương",
          "code": "1204",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2051,
          "provinceID": 244,
          "name": "Huyện Võ Nhai",
          "code": "1205",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1991,
          "provinceID": 244,
          "name": "Huyện Phú Bình",
          "code": "1208",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1990,
          "provinceID": 244,
          "name": "Thị xã Phổ Yên",
          "code": "1209",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1924,
          "provinceID": 244,
          "name": "Huyện Định Hóa",
          "code": "1203",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1918,
          "provinceID": 244,
          "name": "Huyện Đại Từ",
          "code": "1206",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1731,
          "provinceID": 244,
          "name": "Huyện Đồng Hỷ",
          "code": "1207",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1684,
          "provinceID": 244,
          "name": "Thành Phố Sông Công",
          "code": "1202",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1639,
          "provinceID": 244,
          "name": "Thành phố Thái Nguyên",
          "code": "1201",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2239,
          "provinceID": 243,
          "name": "Huyện Thăng Bình",
          "code": "3408",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2224,
          "provinceID": 243,
          "name": "Huyện Tiên Phước",
          "code": "3410",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2219,
          "provinceID": 243,
          "name": "Huyện Tây Giang",
          "code": "3416",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2198,
          "provinceID": 243,
          "name": "Huyện Phước Sơn",
          "code": "3414",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2182,
          "provinceID": 243,
          "name": "Huyện Nông Sơn",
          "code": "3418",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2178,
          "provinceID": 243,
          "name": "Huyện Nam Trà My",
          "code": "3415",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2177,
          "provinceID": 243,
          "name": "Huyện Nam Giang",
          "code": "3413",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2139,
          "provinceID": 243,
          "name": "Huyện Hiệp Đức",
          "code": "3407",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2125,
          "provinceID": 243,
          "name": "Huyện Đông Giang",
          "code": "3412",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2078,
          "provinceID": 243,
          "name": "Huyện Bắc Trà My",
          "code": "3411",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2003,
          "provinceID": 243,
          "name": "Huyện Quế Sơn",
          "code": "3406",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1995,
          "provinceID": 243,
          "name": "Huyện Phú Ninh",
          "code": "3417",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1987,
          "provinceID": 243,
          "name": "Huyện Núi Thành",
          "code": "3409",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1917,
          "provinceID": 243,
          "name": "Huyện Đại Lộc",
          "code": "3405",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1736,
          "provinceID": 243,
          "name": "Thị xã Điện Bàn",
          "code": "3404",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1735,
          "provinceID": 243,
          "name": "Huyện Duy Xuyên",
          "code": "3403",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1632,
          "provinceID": 243,
          "name": "Thành phố Hội An",
          "code": "3402",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1631,
          "provinceID": 243,
          "name": "Thành phố Tam Kỳ",
          "code": "3401",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3304,
          "provinceID": 242,
          "name": "Huyện Trà Bồng",
          "code": "3504",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3270,
          "provinceID": 242,
          "name": "Huyện Sơn Tây",
          "code": "3513",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3226,
          "provinceID": 242,
          "name": "Huyện Mộ Đức",
          "code": "3510",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3127,
          "provinceID": 242,
          "name": "Huyện Ba Tơ",
          "code": "3512",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2222,
          "provinceID": 242,
          "name": "Huyện Tây Trà",
          "code": "3514",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2210,
          "provinceID": 242,
          "name": "Huyện Sơn Hà",
          "code": "3506",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2167,
          "provinceID": 242,
          "name": "Huyện Minh Long",
          "code": "3509",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2114,
          "provinceID": 242,
          "name": "Huyện đảo Lý Sơn",
          "code": "3502",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1988,
          "provinceID": 242,
          "name": "Huyện Nghĩa Hành",
          "code": "3508",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1930,
          "provinceID": 242,
          "name": "Thị xã Đức Phổ",
          "code": "3511",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1898,
          "provinceID": 242,
          "name": "Huyện Bình Sơn",
          "code": "3503",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1738,
          "provinceID": 242,
          "name": "Huyện Tư Nghĩa",
          "code": "3507",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1737,
          "provinceID": 242,
          "name": "Huyện Sơn Tịnh",
          "code": "3505",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1630,
          "provinceID": 242,
          "name": "Thành phố Quảng Ngãi",
          "code": "3501",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3152,
          "provinceID": 241,
          "name": "Huyện Cư Jút",
          "code": "6304",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2227,
          "provinceID": 241,
          "name": "Huyện Tuy Đức",
          "code": "6308",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2151,
          "provinceID": 241,
          "name": "Huyện Krông Nô",
          "code": "6306",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2120,
          "provinceID": 241,
          "name": "Huyện Đắk Song",
          "code": "6305",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1792,
          "provinceID": 241,
          "name": "Huyện Đắk Mil",
          "code": "6303",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1791,
          "provinceID": 241,
          "name": "Huyện Đắk Glong",
          "code": "6307",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1790,
          "provinceID": 241,
          "name": "Huyện Đắk R lấp",
          "code": "6302",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1627,
          "provinceID": 241,
          "name": "Thành phố Gia Nghĩa",
          "code": "6301",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2035,
          "provinceID": 240,
          "name": "Thị xã Trảng Bàng",
          "code": "4609",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1866,
          "provinceID": 240,
          "name": "Huyện Gò Dầu",
          "code": "4608",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1865,
          "provinceID": 240,
          "name": "Huyện Bến Cầu",
          "code": "4607",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1864,
          "provinceID": 240,
          "name": "Huyện Dương Minh Châu",
          "code": "4604",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1863,
          "provinceID": 240,
          "name": "Huyện Tân Châu",
          "code": "4603",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1862,
          "provinceID": 240,
          "name": "Huyện Tân Biên",
          "code": "4602",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1721,
          "provinceID": 240,
          "name": "Thị xã Hòa Thành",
          "code": "4606",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1720,
          "provinceID": 240,
          "name": "Huyện Châu Thành",
          "code": "4605",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1626,
          "provinceID": 240,
          "name": "Thành phố Tây Ninh",
          "code": "4601",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3444,
          "provinceID": 239,
          "name": "Huyện Phú Riềng",
          "code": "4311",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3141,
          "provinceID": 239,
          "name": "Huyện Bù Gia Mập",
          "code": "4310",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3140,
          "provinceID": 239,
          "name": "Huyện Bù Đốp",
          "code": "4306",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1964,
          "provinceID": 239,
          "name": "Huyện Lộc Ninh",
          "code": "4305",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1899,
          "provinceID": 239,
          "name": "Huyện Bù Đăng",
          "code": "4308",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1775,
          "provinceID": 239,
          "name": "Thị xã Phước Long",
          "code": "4307",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1774,
          "provinceID": 239,
          "name": "Thị xã Bình Long",
          "code": "4304",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1773,
          "provinceID": 239,
          "name": "Huyện Hớn Quản",
          "code": "4309",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1772,
          "provinceID": 239,
          "name": "Huyện Chơn Thành",
          "code": "4303",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1722,
          "provinceID": 239,
          "name": "Huyện Đồng Phú",
          "code": "4302",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1625,
          "provinceID": 239,
          "name": "Thành phố Đồng Xoài",
          "code": "4301",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2137,
          "provinceID": 238,
          "name": "Huyện Hải Lăng",
          "code": "3207",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2110,
          "provinceID": 238,
          "name": "Huyện đảo Cồn Cỏ",
          "code": "3210",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2105,
          "provinceID": 238,
          "name": "Huyện Đa Krông",
          "code": "3209",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2040,
          "provinceID": 238,
          "name": "Huyện Triệu Phong",
          "code": "3206",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1936,
          "provinceID": 238,
          "name": "Huyện Gio Linh",
          "code": "3204",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1903,
          "provinceID": 238,
          "name": "Huyện Cam Lộ",
          "code": "3205",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1861,
          "provinceID": 238,
          "name": "Huyện Vĩnh Linh",
          "code": "3203",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1860,
          "provinceID": 238,
          "name": "Huyện Hướng Hóa",
          "code": "3208",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1621,
          "provinceID": 238,
          "name": "Thị xã Quảng Trị",
          "code": "3202",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1620,
          "provinceID": 238,
          "name": "Thành phố Đông Hà",
          "code": "3201",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3286,
          "provinceID": 237,
          "name": "Huyện Tuyên Hóa",
          "code": "3102",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3258,
          "provinceID": 237,
          "name": "Huyện Quảng Trạch",
          "code": "3104",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3224,
          "provinceID": 237,
          "name": "Huyện Minh Hóa",
          "code": "3103",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2002,
          "provinceID": 237,
          "name": "Huyện Quảng Ninh",
          "code": "3106",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1859,
          "provinceID": 237,
          "name": "Thị xã Ba Đồn",
          "code": "3108",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1858,
          "provinceID": 237,
          "name": "Huyện Bố Trạch",
          "code": "3105",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1857,
          "provinceID": 237,
          "name": "Huyện Lệ Thủy",
          "code": "3107",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1619,
          "provinceID": 237,
          "name": "Thành phố Đồng Hới",
          "code": "3101",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3441,
          "provinceID": 236,
          "name": "Thị xã Kỳ Anh",
          "code": "3013",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3320,
          "provinceID": 236,
          "name": "Huyện Vũ Quang",
          "code": "3011",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3220,
          "provinceID": 236,
          "name": "Huyện Lộc Hà",
          "code": "3012",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3201,
          "provinceID": 236,
          "name": "Huyện Hương Sơn",
          "code": "3003",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3188,
          "provinceID": 236,
          "name": "Huyện Đức Thọ",
          "code": "3004",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3143,
          "provinceID": 236,
          "name": "Huyện Can Lộc",
          "code": "3006",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2024,
          "provinceID": 236,
          "name": "Huyện Thạch Hà",
          "code": "3008",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1815,
          "provinceID": 236,
          "name": "Huyện Cẩm Xuyên",
          "code": "3009",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1814,
          "provinceID": 236,
          "name": "Thị xã Hồng Lĩnh",
          "code": "3002",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1813,
          "provinceID": 236,
          "name": "Huyện Nghi Xuân",
          "code": "3005",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1812,
          "provinceID": 236,
          "name": "Huyện Hương Khê",
          "code": "3007",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1811,
          "provinceID": 236,
          "name": "Huyện Kỳ Anh",
          "code": "3010",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1618,
          "provinceID": 236,
          "name": "Thành phố Hà Tĩnh",
          "code": "3001",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3291,
          "provinceID": 235,
          "name": "Huyện Thanh Chương",
          "code": "2915",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3288,
          "provinceID": 235,
          "name": "Huyện Tương Dương",
          "code": "2908",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3261,
          "provinceID": 235,
          "name": "Huyện Quỳ Châu",
          "code": "2903",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3260,
          "provinceID": 235,
          "name": "Huyện Quế Phong",
          "code": "2919",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3233,
          "provinceID": 235,
          "name": "Huyện Nam Đàn",
          "code": "2917",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3211,
          "provinceID": 235,
          "name": "Huyện Kỳ Sơn",
          "code": "2907",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1947,
          "provinceID": 235,
          "name": "Huyện Hưng Nguyên",
          "code": "2918",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1854,
          "provinceID": 235,
          "name": "Huyện Nghi Lộc",
          "code": "2916",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1853,
          "provinceID": 235,
          "name": "Huyện Con Cuông",
          "code": "2909",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1852,
          "provinceID": 235,
          "name": "Huyện Quỳ Hợp",
          "code": "2904",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1851,
          "provinceID": 235,
          "name": "Huyện Nghĩa Đàn",
          "code": "2905",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1850,
          "provinceID": 235,
          "name": "Thị xã Thái Hòa",
          "code": "2920",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1849,
          "provinceID": 235,
          "name": "Thị xã Hoàng Mai",
          "code": "2921",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1848,
          "provinceID": 235,
          "name": "Huyện Quỳnh Lưu",
          "code": "2906",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1847,
          "provinceID": 235,
          "name": "Huyện Diễn Châu",
          "code": "2912",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1846,
          "provinceID": 235,
          "name": "Huyện Yên Thành",
          "code": "2911",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1845,
          "provinceID": 235,
          "name": "Huyện Tân Kỳ",
          "code": "2910",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1844,
          "provinceID": 235,
          "name": "Huyện Anh Sơn",
          "code": "2913",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1843,
          "provinceID": 235,
          "name": "Huyện Đô Lương",
          "code": "2914",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1842,
          "provinceID": 235,
          "name": "Thị xã Cửa Lò",
          "code": "2902",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1617,
          "provinceID": 235,
          "name": "Thành phố Vinh",
          "code": "2901",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3298,
          "provinceID": 234,
          "name": "Huyện Thiệu Hóa",
          "code": "2817",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3241,
          "provinceID": 234,
          "name": "Huyện Nga Sơn",
          "code": "2823",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3216,
          "provinceID": 234,
          "name": "Huyện Lang Chánh",
          "code": "2811",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3147,
          "provinceID": 234,
          "name": "Huyện Cẩm Thủy",
          "code": "2814",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2249,
          "provinceID": 234,
          "name": "Huyện Triệu Sơn",
          "code": "2818",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2190,
          "provinceID": 234,
          "name": "Huyện Như Thanh",
          "code": "2810",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2181,
          "provinceID": 234,
          "name": "Huyện Nông Cống",
          "code": "2819",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2070,
          "provinceID": 234,
          "name": "Huyện Bá Thước",
          "code": "2807",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2000,
          "provinceID": 234,
          "name": "Huyện Quan Sơn",
          "code": "2805",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1942,
          "provinceID": 234,
          "name": "Huyện Hậu Lộc",
          "code": "2824",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1927,
          "provinceID": 234,
          "name": "Huyện Đông Sơn",
          "code": "2820",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1881,
          "provinceID": 234,
          "name": "Huyện Vĩnh Lộc",
          "code": "2816",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1880,
          "provinceID": 234,
          "name": "Huyện Thạch Thành",
          "code": "2813",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1879,
          "provinceID": 234,
          "name": "Huyện Quan Hóa",
          "code": "2804",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1878,
          "provinceID": 234,
          "name": "Huyện Mường Lát",
          "code": "2806",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1877,
          "provinceID": 234,
          "name": "Huyện Hà Trung",
          "code": "2821",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1876,
          "provinceID": 234,
          "name": "Thị xã Bỉm Sơn",
          "code": "2802",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1875,
          "provinceID": 234,
          "name": "Huyện Yên Định",
          "code": "2827",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1874,
          "provinceID": 234,
          "name": "Huyện Ngọc Lặc",
          "code": "2812",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1873,
          "provinceID": 234,
          "name": "Huyện Thọ Xuân",
          "code": "2815",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1872,
          "provinceID": 234,
          "name": "Huyện Thường Xuân",
          "code": "2808",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1871,
          "provinceID": 234,
          "name": "Huyện Như Xuân",
          "code": "2809",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1870,
          "provinceID": 234,
          "name": "Thị Xã Nghi Sơn",
          "code": "2826",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1748,
          "provinceID": 234,
          "name": "Huyện Hoằng Hóa",
          "code": "2822",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1747,
          "provinceID": 234,
          "name": "Huyện Quảng Xương",
          "code": "2825",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1712,
          "provinceID": 234,
          "name": "Thành phố Sầm Sơn",
          "code": "2803",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1616,
          "provinceID": 234,
          "name": "Thành phố Thanh Hóa",
          "code": "2801",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3327,
          "provinceID": 233,
          "name": "Huyện Yên Mô",
          "code": "2706",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3247,
          "provinceID": 233,
          "name": "Huyện Nho Quan",
          "code": "2703",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3205,
          "provinceID": 233,
          "name": "Huyện Kim Sơn",
          "code": "2707",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3191,
          "provinceID": 233,
          "name": "Huyện Gia Viễn",
          "code": "2704",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1944,
          "provinceID": 233,
          "name": "Huyện Hoa Lư",
          "code": "2705",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1714,
          "provinceID": 233,
          "name": "Huyện Yên Khánh",
          "code": "2708",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1713,
          "provinceID": 233,
          "name": "Thành phố Tam Điệp",
          "code": "2702",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1615,
          "provinceID": 233,
          "name": "Thành phố Ninh Bình",
          "code": "2701",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2027,
          "provinceID": 232,
          "name": "Huyện Thanh Liêm",
          "code": "2405",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1970,
          "provinceID": 232,
          "name": "Huyện Lý Nhân",
          "code": "2404",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1952,
          "provinceID": 232,
          "name": "Huyện Kim Bảng",
          "code": "2403",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1897,
          "provinceID": 232,
          "name": "Huyện Bình Lục",
          "code": "2406",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1802,
          "provinceID": 232,
          "name": "Thị xã Duy Tiên",
          "code": "2402",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1614,
          "provinceID": 232,
          "name": "Thành phố Phủ Lý",
          "code": "2401",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3323,
          "provinceID": 231,
          "name": "Huyện Xuân Trường",
          "code": "2503",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3319,
          "provinceID": 231,
          "name": "Huyện Vụ Bản",
          "code": "2506",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3308,
          "provinceID": 231,
          "name": "Huyện Trực Ninh",
          "code": "2508",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3243,
          "provinceID": 231,
          "name": "Huyện Nghĩa Hưng",
          "code": "2509",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3193,
          "provinceID": 231,
          "name": "Huyện Giao Thủy",
          "code": "2504",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1983,
          "provinceID": 231,
          "name": "Huyện Nam Trực",
          "code": "2507",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1981,
          "provinceID": 231,
          "name": "Huyện Mỹ Lộc",
          "code": "2502",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1841,
          "provinceID": 231,
          "name": "Huyện Ý Yên",
          "code": "2505",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1840,
          "provinceID": 231,
          "name": "Huyện Hải Hậu",
          "code": "2510",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1613,
          "provinceID": 231,
          "name": "Thành phố Nam Định",
          "code": "2501",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3199,
          "provinceID": 230,
          "name": "Huyện Hoành Bồ",
          "code": "1712",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3185,
          "provinceID": 230,
          "name": "Thị xã Đông Triều",
          "code": "1710",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3180,
          "provinceID": 230,
          "name": "Huyện Đầm Hà",
          "code": "1706",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3126,
          "provinceID": 230,
          "name": "Huyện Ba Chẽ",
          "code": "1709",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2109,
          "provinceID": 230,
          "name": "Huyện đảo Cô Tô",
          "code": "1714",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2066,
          "provinceID": 230,
          "name": "Thị xã Quảng Yên",
          "code": "1711",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2019,
          "provinceID": 230,
          "name": "Huyện Tiên Yên",
          "code": "1708",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1940,
          "provinceID": 230,
          "name": "Huyện Hải Hà",
          "code": "1707",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1920,
          "provinceID": 230,
          "name": "Huyện đảo Vân Đồn",
          "code": "1713",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1896,
          "provinceID": 230,
          "name": "Huyện Bình Liêu",
          "code": "1705",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1686,
          "provinceID": 230,
          "name": "Thành phố Uông Bí",
          "code": "1703",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1683,
          "provinceID": 230,
          "name": "Thành phố Cẩm Phả",
          "code": "1702",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1604,
          "provinceID": 230,
          "name": "Thành phố Hạ Long",
          "code": "1701",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1603,
          "provinceID": 230,
          "name": "Thành phố Móng Cái",
          "code": "1704",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3290,
          "provinceID": 229,
          "name": "Huyện Thanh Ba",
          "code": "1504",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3272,
          "provinceID": 229,
          "name": "Huyện Tam Nông",
          "code": "1511",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2268,
          "provinceID": 229,
          "name": "Huyện Yên Lập",
          "code": "1507",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2237,
          "provinceID": 229,
          "name": "Huyện Thanh Thủy",
          "code": "1512",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2064,
          "provinceID": 229,
          "name": "Thị xã Phú Thọ",
          "code": "1502",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2029,
          "provinceID": 229,
          "name": "Huyện Thanh Sơn",
          "code": "1508",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2015,
          "provinceID": 229,
          "name": "Huyện Tân Sơn",
          "code": "1513",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1994,
          "provinceID": 229,
          "name": "Huyện Phù Ninh",
          "code": "1509",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1959,
          "provinceID": 229,
          "name": "Huyện Lâm Thao",
          "code": "1510",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1938,
          "provinceID": 229,
          "name": "Huyện Hạ Hòa",
          "code": "1505",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1925,
          "provinceID": 229,
          "name": "Huyện Đoan Hùng",
          "code": "1503",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1905,
          "provinceID": 229,
          "name": "Huyện Cẩm Khê",
          "code": "1506",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1602,
          "provinceID": 229,
          "name": "Thành phố Việt Trì",
          "code": "1501",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3267,
          "provinceID": 228,
          "name": "Huyện Sơn Dương",
          "code": "0907",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3157,
          "provinceID": 228,
          "name": "Huyện Chiêm Hóa",
          "code": "0904",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1982,
          "provinceID": 228,
          "name": "Huyện Na Hang",
          "code": "0903",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1957,
          "provinceID": 228,
          "name": "Huyện Lâm Bình",
          "code": "0902",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1941,
          "provinceID": 228,
          "name": "Huyện Hàm Yên",
          "code": "0905",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1745,
          "provinceID": 228,
          "name": "Huyện Yên Sơn",
          "code": "0906",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1601,
          "provinceID": 228,
          "name": "Thành phố Tuyên Quang",
          "code": "0901",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2256,
          "provinceID": 227,
          "name": "Huyện Vị Xuyên",
          "code": "0506",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2075,
          "provinceID": 227,
          "name": "Huyện Bắc Mê",
          "code": "0507",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2053,
          "provinceID": 227,
          "name": "Huyện Yên Minh",
          "code": "0504",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2052,
          "provinceID": 227,
          "name": "Huyện Xín Mần",
          "code": "0509",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2001,
          "provinceID": 227,
          "name": "Huyện Quang Bình",
          "code": "0511",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1999,
          "provinceID": 227,
          "name": "Huyện Quản Bạ",
          "code": "0505",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1973,
          "provinceID": 227,
          "name": "Huyện Mèo Vạc",
          "code": "0503",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1945,
          "provinceID": 227,
          "name": "Huyện Hoàng Su Phì",
          "code": "0508",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1928,
          "provinceID": 227,
          "name": "Huyện Đồng Văn",
          "code": "0502",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1893,
          "provinceID": 227,
          "name": "Huyện Bắc Quang",
          "code": "0510",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1600,
          "provinceID": 227,
          "name": "Thành phố Hà Giang",
          "code": "0501",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3281,
          "provinceID": 226,
          "name": "Huyện Tiền Hải",
          "code": "2607",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1951,
          "provinceID": 226,
          "name": "Huyện Kiến Xương",
          "code": "2606",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1869,
          "provinceID": 226,
          "name": "Huyện Thái Thụy",
          "code": "2608",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1868,
          "provinceID": 226,
          "name": "Huyện Quỳnh Phụ",
          "code": "2602",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1867,
          "provinceID": 226,
          "name": "Huyện Hưng Hà",
          "code": "2603",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1716,
          "provinceID": 226,
          "name": "Huyện Vũ Thư",
          "code": "2605",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1715,
          "provinceID": 226,
          "name": "Huyện Đông Hưng",
          "code": "2604",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1599,
          "provinceID": 226,
          "name": "Thành phố Thái Bình",
          "code": "2601",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3294,
          "provinceID": 225,
          "name": "Huyện Thanh Miện",
          "code": "2107",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3292,
          "provinceID": 225,
          "name": "Huyện Thanh Hà",
          "code": "2110",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3287,
          "provinceID": 225,
          "name": "Huyện Tứ Kỳ",
          "code": "2106",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3238,
          "provinceID": 225,
          "name": "Huyện Ninh Giang",
          "code": "2108",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2056,
          "provinceID": 225,
          "name": "Thành phố Chí Linh",
          "code": "2102",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1953,
          "provinceID": 225,
          "name": "Huyện Kim Thành",
          "code": "2111",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1934,
          "provinceID": 225,
          "name": "Huyện Gia Lộc",
          "code": "2105",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1818,
          "provinceID": 225,
          "name": "Thị xã Kinh Môn",
          "code": "2104",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1817,
          "provinceID": 225,
          "name": "Huyện Cẩm Giàng",
          "code": "2109",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1816,
          "provinceID": 225,
          "name": "Huyện Bình Giang",
          "code": "2112",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1727,
          "provinceID": 225,
          "name": "Huyện Nam Sách",
          "code": "2103",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1598,
          "provinceID": 225,
          "name": "Thành phố Hải Dương",
          "code": "2101",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3203,
          "provinceID": 224,
          "name": "Huyện Kiến Thụy",
          "code": "0308",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2108,
          "provinceID": 224,
          "name": "Huyện đảo Cát Hải",
          "code": "0313",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2107,
          "provinceID": 224,
          "name": "Huyện đảo Bạch Long Vĩ",
          "code": "0314",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1822,
          "provinceID": 224,
          "name": "Huyện Vĩnh Bảo",
          "code": "0312",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1821,
          "provinceID": 224,
          "name": "Huyện Tiên Lãng",
          "code": "0311",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1820,
          "provinceID": 224,
          "name": "Huyện An Lão",
          "code": "0307",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1819,
          "provinceID": 224,
          "name": "Huyện An Dương",
          "code": "0310",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1726,
          "provinceID": 224,
          "name": "Huyện Thủy Nguyên",
          "code": "0309",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1707,
          "provinceID": 224,
          "name": "Quận Đồ Sơn",
          "code": "0306",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1706,
          "provinceID": 224,
          "name": "Quận Dương Kinh",
          "code": "0315",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1591,
          "provinceID": 224,
          "name": "Quận Hải An",
          "code": "0305",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1590,
          "provinceID": 224,
          "name": "Quận Kiến An",
          "code": "0304",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1589,
          "provinceID": 224,
          "name": "Quận Hồng Bàng",
          "code": "0301",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1588,
          "provinceID": 224,
          "name": "Quận Lê Chân",
          "code": "0302",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1587,
          "provinceID": 224,
          "name": "Quận Ngô Quyền",
          "code": "0303",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3257,
          "provinceID": 223,
          "name": "Huyện Quảng Điền",
          "code": "3303",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3234,
          "provinceID": 223,
          "name": "Huyện Nam Đông",
          "code": "3308",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2193,
          "provinceID": 223,
          "name": "Huyện Phong Điền",
          "code": "3302",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1885,
          "provinceID": 223,
          "name": "Huyện A Lưới",
          "code": "3309",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1882,
          "provinceID": 223,
          "name": "Huyện Phú Lộc",
          "code": "3307",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1749,
          "provinceID": 223,
          "name": "Huyện Phú Vang",
          "code": "3305",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1698,
          "provinceID": 223,
          "name": "Thị xã Hương Thủy",
          "code": "3306",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1697,
          "provinceID": 223,
          "name": "Thị xã Hương Trà",
          "code": "3304",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1585,
          "provinceID": 223,
          "name": "Thành phố Huế",
          "code": "3301",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3271,
          "provinceID": 221,
          "name": "Huyện Tam Đảo",
          "code": "1609",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3265,
          "provinceID": 221,
          "name": "Huyện Sông Lô",
          "code": "1607",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2065,
          "provinceID": 221,
          "name": "Thành phố Phúc Yên",
          "code": "1608",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2009,
          "provinceID": 221,
          "name": "Huyện Tam Dương",
          "code": "1602",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1960,
          "provinceID": 221,
          "name": "Huyện Lập Thạch",
          "code": "1603",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1734,
          "provinceID": 221,
          "name": "Huyện Yên Lạc",
          "code": "1605",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1733,
          "provinceID": 221,
          "name": "Huyện Vĩnh Tường",
          "code": "1604",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1732,
          "provinceID": 221,
          "name": "Huyện Bình Xuyên",
          "code": "1606",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1578,
          "provinceID": 221,
          "name": "Thành phố Vĩnh Yên",
          "code": "1601",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3317,
          "provinceID": 220,
          "name": "Huyện Vĩnh Thạnh",
          "code": "5507",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3300,
          "provinceID": 220,
          "name": "Huyện Thới Lai",
          "code": "5509",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3250,
          "provinceID": 220,
          "name": "Huyện Phong Điền",
          "code": "5505",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3150,
          "provinceID": 220,
          "name": "Huyện Cờ Đỏ",
          "code": "5506",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1576,
          "provinceID": 220,
          "name": "Quận Thốt Nốt",
          "code": "5508",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1575,
          "provinceID": 220,
          "name": "Quận Ô Môn",
          "code": "5504",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1574,
          "provinceID": 220,
          "name": "Quận Cái Răng",
          "code": "5503",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1573,
          "provinceID": 220,
          "name": "Quận Bình Thủy",
          "code": "5502",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1572,
          "provinceID": 220,
          "name": "Quận Ninh Kiều",
          "code": "5501",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3125,
          "provinceID": 219,
          "name": "Huyện An Minh",
          "code": "5410",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2260,
          "provinceID": 219,
          "name": "Huyện Vĩnh Thuận",
          "code": "5411",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2251,
          "provinceID": 219,
          "name": "Huyện U Minh Thượng",
          "code": "5414",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2134,
          "provinceID": 219,
          "name": "Huyện Giang Thành",
          "code": "5415",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2132,
          "provinceID": 219,
          "name": "Huyện Gò Quao",
          "code": "5408",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2115,
          "provinceID": 219,
          "name": "Thành phố Phú Quốc",
          "code": "5412",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2113,
          "provinceID": 219,
          "name": "Huyện đảo Kiên Hải",
          "code": "5413",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2058,
          "provinceID": 219,
          "name": "Thành phố Hà Tiên",
          "code": "5402",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1950,
          "provinceID": 219,
          "name": "Huyện Kiên Lương",
          "code": "5403",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1833,
          "provinceID": 219,
          "name": "Huyện An Biên",
          "code": "5409",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1832,
          "provinceID": 219,
          "name": "Huyện Giồng Riềng",
          "code": "5407",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1831,
          "provinceID": 219,
          "name": "Huyện Tân Hiệp",
          "code": "5405",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1830,
          "provinceID": 219,
          "name": "Huyện Hòn Đất",
          "code": "5404",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1719,
          "provinceID": 219,
          "name": "Huyện Châu Thành",
          "code": "5406",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1570,
          "provinceID": 219,
          "name": "Thành phố Rạch Giá",
          "code": "5401",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2272,
          "provinceID": 218,
          "name": "Thị xã Vĩnh Châu",
          "code": "5907",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2238,
          "provinceID": 218,
          "name": "Huyện Thạnh Trị",
          "code": "5905",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2173,
          "provinceID": 218,
          "name": "Huyện Mỹ Tú",
          "code": "5903",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2161,
          "provinceID": 218,
          "name": "Huyện Long Phú",
          "code": "5906",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2093,
          "provinceID": 218,
          "name": "Huyện Cù Lao Dung",
          "code": "5908",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2062,
          "provinceID": 218,
          "name": "Thị xã Ngã Năm",
          "code": "5909",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2037,
          "provinceID": 218,
          "name": "Huyện Trần Đề",
          "code": "5911",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1949,
          "provinceID": 218,
          "name": "Huyện Kế Sách",
          "code": "5902",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1910,
          "provinceID": 218,
          "name": "Huyện Châu Thành",
          "code": "5910",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1743,
          "provinceID": 218,
          "name": "Huyện Mỹ Xuyên",
          "code": "5904",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1568,
          "provinceID": 218,
          "name": "Thành phố Sóc Trăng",
          "code": "5901",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1758,
          "provinceID": 217,
          "name": "Huyện Châu Phú",
          "code": "5108",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1757,
          "provinceID": 217,
          "name": "Huyện Chợ Mới",
          "code": "5109",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1756,
          "provinceID": 217,
          "name": "Huyện Phú Tân",
          "code": "5105",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1755,
          "provinceID": 217,
          "name": "Huyện Tân Châu",
          "code": "5104",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1754,
          "provinceID": 217,
          "name": "Huyện An Phú",
          "code": "5103",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1753,
          "provinceID": 217,
          "name": "Thành phố Châu Đốc",
          "code": "5102",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1752,
          "provinceID": 217,
          "name": "Huyện Tịnh Biên",
          "code": "5106",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1751,
          "provinceID": 217,
          "name": "Huyện Tri Tôn",
          "code": "5107",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1750,
          "provinceID": 217,
          "name": "Huyện Thoại Sơn",
          "code": "5111",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1718,
          "provinceID": 217,
          "name": "Huyện Châu Thành",
          "code": "5110",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1566,
          "provinceID": 217,
          "name": "Thành phố Long Xuyên",
          "code": "5101",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3200,
          "provinceID": 216,
          "name": "Thành phố Hồng Ngự",
          "code": "5004",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3155,
          "provinceID": 216,
          "name": "Huyện Châu Thành",
          "code": "5011",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2059,
          "provinceID": 216,
          "name": "Thị xã Hồng Ngự",
          "code": "5012",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2030,
          "provinceID": 216,
          "name": "Huyện Tháp Mười",
          "code": "5009",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2026,
          "provinceID": 216,
          "name": "Huyện Thanh Bình",
          "code": "5006",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2013,
          "provinceID": 216,
          "name": "Huyện Tân Hồng",
          "code": "5003",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2011,
          "provinceID": 216,
          "name": "Huyện Tam Nông",
          "code": "5005",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1961,
          "provinceID": 216,
          "name": "Huyện Lấp Vò",
          "code": "5008",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1725,
          "provinceID": 216,
          "name": "Huyện Lai Vung",
          "code": "5010",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1724,
          "provinceID": 216,
          "name": "Huyện Cao Lãnh",
          "code": "5007",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1668,
          "provinceID": 216,
          "name": "Thành phố Sa Đéc",
          "code": "5002",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1564,
          "provinceID": 216,
          "name": "Thành phố Cao Lãnh",
          "code": "5001",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2263,
          "provinceID": 215,
          "name": "Huyện Vũng Liêm",
          "code": "5707",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2164,
          "provinceID": 215,
          "name": "Huyện Mang Thít",
          "code": "5703",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2081,
          "provinceID": 215,
          "name": "Huyện Bình Tân",
          "code": "5708",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2054,
          "provinceID": 215,
          "name": "Thị xã Bình Minh",
          "code": "5704",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2034,
          "provinceID": 215,
          "name": "Huyện Trà Ôn",
          "code": "5706",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2008,
          "provinceID": 215,
          "name": "Huyện Tam Bình",
          "code": "5705",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1962,
          "provinceID": 215,
          "name": "Huyện Long Hồ",
          "code": "5702",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1562,
          "provinceID": 215,
          "name": "Thành phố Vĩnh Long",
          "code": "5701",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3443,
          "provinceID": 214,
          "name": "Thị xã Duyên Hải",
          "code": "5809",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2103,
          "provinceID": 214,
          "name": "Huyện Duyên Hải",
          "code": "5808",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2091,
          "provinceID": 214,
          "name": "Huyện Cầu Kè",
          "code": "5803",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2086,
          "provinceID": 214,
          "name": "Huyện Càng Long",
          "code": "5802",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2033,
          "provinceID": 214,
          "name": "Huyện Trà Cú",
          "code": "5806",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2020,
          "provinceID": 214,
          "name": "Huyện Tiểu Cần",
          "code": "5804",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1911,
          "provinceID": 214,
          "name": "Huyện Châu Thành",
          "code": "5805",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1908,
          "provinceID": 214,
          "name": "Huyện Cầu Ngang",
          "code": "5807",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1560,
          "provinceID": 214,
          "name": "Thành phố Trà Vinh",
          "code": "5801",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3158,
          "provinceID": 213,
          "name": "Huyện Chợ Lách",
          "code": "5603",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2028,
          "provinceID": 213,
          "name": "Huyện Thạnh Phú",
          "code": "5608",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1975,
          "provinceID": 213,
          "name": "Huyện Mỏ Cày Nam",
          "code": "5609",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1974,
          "provinceID": 213,
          "name": "Huyện Mỏ Cày Bắc",
          "code": "5604",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1937,
          "provinceID": 213,
          "name": "Huyện Giồng Trôm",
          "code": "5605",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1895,
          "provinceID": 213,
          "name": "Huyện Bình Đại",
          "code": "5606",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1888,
          "provinceID": 213,
          "name": "Huyện Ba Tri",
          "code": "5607",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1742,
          "provinceID": 213,
          "name": "Huyện Châu Thành",
          "code": "5602",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1558,
          "provinceID": 213,
          "name": "Thành phố Bến Tre",
          "code": "5601",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3275,
          "provinceID": 212,
          "name": "Huyện Tân Phước",
          "code": "5309",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2216,
          "provinceID": 212,
          "name": "Huyện Tân Phú Đông",
          "code": "5310",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2084,
          "provinceID": 212,
          "name": "Huyện Cai Lậy",
          "code": "5304",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2057,
          "provinceID": 212,
          "name": "Thị xã Gò Công",
          "code": "5302",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2055,
          "provinceID": 212,
          "name": "Thị xã Cai Lậy",
          "code": "5311",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1933,
          "provinceID": 212,
          "name": "Huyện Gò Công Tây",
          "code": "5307",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1932,
          "provinceID": 212,
          "name": "Huyện Gò Công Đông",
          "code": "5308",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1900,
          "provinceID": 212,
          "name": "Huyện Cái Bè",
          "code": "5303",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1741,
          "provinceID": 212,
          "name": "Huyện Chợ Gạo",
          "code": "5306",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1740,
          "provinceID": 212,
          "name": "Huyện Châu Thành",
          "code": "5305",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1556,
          "provinceID": 212,
          "name": "Thành phố Mỹ Tho",
          "code": "5301",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3329,
          "provinceID": 211,
          "name": "Thị xã Kiến Tường",
          "code": "4915",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3315,
          "provinceID": 211,
          "name": "Huyện Vĩnh Hưng",
          "code": "4902",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3293,
          "provinceID": 211,
          "name": "Huyện Thạnh Hóa",
          "code": "4905",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3276,
          "provinceID": 211,
          "name": "Huyện Tân Thạnh",
          "code": "4904",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3273,
          "provinceID": 211,
          "name": "Huyện Tân Hưng",
          "code": "4914",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3227,
          "provinceID": 211,
          "name": "Huyện Mộc Hóa",
          "code": "4903",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2129,
          "provinceID": 211,
          "name": "Huyện Đức Huệ",
          "code": "4906",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2031,
          "provinceID": 211,
          "name": "Huyện Thủ Thừa",
          "code": "4909",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2016,
          "provinceID": 211,
          "name": "Huyện Tân Trụ",
          "code": "4911",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1929,
          "provinceID": 211,
          "name": "Huyện Đức Hòa",
          "code": "4907",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1909,
          "provinceID": 211,
          "name": "Huyện Châu Thành",
          "code": "4910",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1907,
          "provinceID": 211,
          "name": "Huyện Cần Giuộc",
          "code": "4913",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1906,
          "provinceID": 211,
          "name": "Huyện Cần Đước",
          "code": "4912",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1894,
          "provinceID": 211,
          "name": "Huyện Bến Lức",
          "code": "4908",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1554,
          "provinceID": 211,
          "name": "Thành phố Tân An",
          "code": "4901",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3418,
          "provinceID": 210,
          "name": "Huyện M Đrắk",
          "code": "4009",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3217,
          "provinceID": 210,
          "name": "Huyện Lắk",
          "code": "4012",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3153,
          "provinceID": 210,
          "name": "Huyện Cư Kuin",
          "code": "4014",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2150,
          "provinceID": 210,
          "name": "Huyện Krông Búk",
          "code": "4003",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2131,
          "provinceID": 210,
          "name": "Huyện Ea Súp",
          "code": "4005",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1954,
          "provinceID": 210,
          "name": "Huyện Krông Pắc",
          "code": "4007",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1931,
          "provinceID": 210,
          "name": "Huyện Ea Kar",
          "code": "4008",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1884,
          "provinceID": 210,
          "name": "Huyện Krông Ana",
          "code": "4010",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1789,
          "provinceID": 210,
          "name": "Huyện Krông Bông",
          "code": "4011",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1788,
          "provinceID": 210,
          "name": "Thị xã Buôn Hồ",
          "code": "4015",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1787,
          "provinceID": 210,
          "name": "Huyện Krông Năng",
          "code": "4004",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1786,
          "provinceID": 210,
          "name": "Huyện Ea H leo",
          "code": "4002",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1785,
          "provinceID": 210,
          "name": "Huyện Cư M gar",
          "code": "4006",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1784,
          "provinceID": 210,
          "name": "Huyện Buôn Ðôn",
          "code": "4013",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1552,
          "provinceID": 210,
          "name": "Thành phố Buôn Ma Thuột",
          "code": "4001",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3160,
          "provinceID": 209,
          "name": "Huyện Di Linh",
          "code": "4204",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3146,
          "provinceID": 209,
          "name": "Huyện Cát Tiên",
          "code": "4209",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2106,
          "provinceID": 209,
          "name": "Huyện Đạ Tẻh",
          "code": "4208",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2104,
          "provinceID": 209,
          "name": "Huyện Đạ Huoai",
          "code": "4207",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1958,
          "provinceID": 209,
          "name": "Huyện Lâm Hà",
          "code": "4210",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1956,
          "provinceID": 209,
          "name": "Huyện Lạc Dương",
          "code": "4206",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1919,
          "provinceID": 209,
          "name": "Huyện Đam Rông",
          "code": "4212",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1839,
          "provinceID": 209,
          "name": "Huyện Bảo Lâm",
          "code": "4211",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1838,
          "provinceID": 209,
          "name": "Thành phố Bảo Lộc",
          "code": "4202",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1837,
          "provinceID": 209,
          "name": "Huyện Đức Trọng",
          "code": "4203",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1836,
          "provinceID": 209,
          "name": "Huyện Đơn Dương",
          "code": "4205",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1550,
          "provinceID": 209,
          "name": "Thành phố Đà Lạt",
          "code": "4201",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3213,
          "provinceID": 208,
          "name": "Huyện Khánh Vĩnh",
          "code": "4105",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3212,
          "provinceID": 208,
          "name": "Huyện Khánh Sơn",
          "code": "4107",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2117,
          "provinceID": 208,
          "name": "Huyện đảo Trường Sa",
          "code": "4108",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2061,
          "provinceID": 208,
          "name": "Thị xã Ninh Hòa",
          "code": "4103",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1902,
          "provinceID": 208,
          "name": "Huyện Cam Lâm",
          "code": "4109",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1829,
          "provinceID": 208,
          "name": "Huyện Vạn Ninh",
          "code": "4102",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1739,
          "provinceID": 208,
          "name": "Huyện Diên Khánh",
          "code": "4104",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1664,
          "provinceID": 208,
          "name": "Thành phố Cam Ranh",
          "code": "4106",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1548,
          "provinceID": 208,
          "name": "Thành phố Nha Trang",
          "code": "4101",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2165,
          "provinceID": 207,
          "name": "Huyện Mang Yang",
          "code": "3803",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2152,
          "provinceID": 207,
          "name": "Huyện Krông Pa",
          "code": "3811",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2149,
          "provinceID": 207,
          "name": "Huyện Kông Chro",
          "code": "3806",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2144,
          "provinceID": 207,
          "name": "Huyện Kbang",
          "code": "3804",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2119,
          "provinceID": 207,
          "name": "Huyện Đắk Pơ",
          "code": "3815",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2118,
          "provinceID": 207,
          "name": "Huyện Đắk Đoa",
          "code": "3813",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2101,
          "provinceID": 207,
          "name": "Huyện Chư Pưh",
          "code": "3817",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1801,
          "provinceID": 207,
          "name": "Huyện Chư Păh",
          "code": "3802",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1800,
          "provinceID": 207,
          "name": "Thị xã An Khê",
          "code": "3805",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1799,
          "provinceID": 207,
          "name": "Huyện Ia Pa",
          "code": "3814",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1798,
          "provinceID": 207,
          "name": "Thị xã Ayun Pa",
          "code": "3810",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1797,
          "provinceID": 207,
          "name": "Huyện Phú Thiện",
          "code": "3816",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1796,
          "provinceID": 207,
          "name": "Huyện Chư Sê",
          "code": "3809",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1795,
          "provinceID": 207,
          "name": "Huyện Chư Prông",
          "code": "3808",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1794,
          "provinceID": 207,
          "name": "Huyện Đức Cơ",
          "code": "3807",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1793,
          "provinceID": 207,
          "name": "Huyện Ia Grai",
          "code": "3812",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1546,
          "provinceID": 207,
          "name": "Thành phố Pleiku",
          "code": "3801",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2111,
          "provinceID": 206,
          "name": "Huyện đảo Côn Đảo",
          "code": "5205",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1709,
          "provinceID": 206,
          "name": "Huyện Châu Đức",
          "code": "5207",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1701,
          "provinceID": 206,
          "name": "Thị Xã Phú Mỹ",
          "code": "5206",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1699,
          "provinceID": 206,
          "name": "Huyện Xuyên Mộc",
          "code": "5203",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1690,
          "provinceID": 206,
          "name": "Huyện Đất Đỏ",
          "code": "5208",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1689,
          "provinceID": 206,
          "name": "Huyện Long Điền",
          "code": "5204",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1688,
          "provinceID": 206,
          "name": "TT Phú Mỹ - cũ",
          "code": "5200",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1667,
          "provinceID": 206,
          "name": "Thành phố Bà Rịa",
          "code": "5202",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1544,
          "provinceID": 206,
          "name": "Thành phố Vũng Tàu",
          "code": "5201",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3135,
          "provinceID": 205,
          "name": "Huyện Bắc Tân Uyên",
          "code": "4409",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3132,
          "provinceID": 205,
          "name": "Huyện Bàu Bàng",
          "code": "4408",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1992,
          "provinceID": 205,
          "name": "Huyện Phú Giáo",
          "code": "4406",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1746,
          "provinceID": 205,
          "name": "Huyện Dầu Tiếng",
          "code": "4407",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1696,
          "provinceID": 205,
          "name": "Thị xã Bến Cát",
          "code": "4402",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1695,
          "provinceID": 205,
          "name": "Thị xã Tân Uyên",
          "code": "4403",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1541,
          "provinceID": 205,
          "name": "Thành phố Thuận An",
          "code": "4404",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1540,
          "provinceID": 205,
          "name": "Thành phố Dĩ An",
          "code": "4405",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1538,
          "provinceID": 205,
          "name": "Thành phố Thủ Dầu Một",
          "code": "4401",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2049,
          "provinceID": 204,
          "name": "Huyện Vĩnh Cửu",
          "code": "4802",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1708,
          "provinceID": 204,
          "name": "Huyện Nhơn Trạch",
          "code": "4809",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1705,
          "provinceID": 204,
          "name": "Huyện Thống Nhất",
          "code": "4805",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1704,
          "provinceID": 204,
          "name": "Huyện Xuân Lộc",
          "code": "4807",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1702,
          "provinceID": 204,
          "name": "Huyện Cẩm Mỹ",
          "code": "4811",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1700,
          "provinceID": 204,
          "name": "Huyện Định Quán",
          "code": "4804",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1694,
          "provinceID": 204,
          "name": "Huyện Long Thành",
          "code": "4808",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1693,
          "provinceID": 204,
          "name": "Huyện Tân Phú",
          "code": "4803",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1692,
          "provinceID": 204,
          "name": "Thành phố Long Khánh",
          "code": "4806",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1691,
          "provinceID": 204,
          "name": "Huyện Trảng Bom",
          "code": "4810",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1536,
          "provinceID": 204,
          "name": "Thành phố Biên Hòa",
          "code": "4801",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3447,
          "provinceID": 203,
          "name": "Quận Đặc Biệt",
          "code": "0409",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2112,
          "provinceID": 203,
          "name": "Huyện đảo Hoàng Sa",
          "code": "0408",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1687,
          "provinceID": 203,
          "name": "Huyện Hòa Vang",
          "code": "0406",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1531,
          "provinceID": 203,
          "name": "Quận Cẩm Lệ",
          "code": "0407",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1530,
          "provinceID": 203,
          "name": "Quận Liên Chiểu",
          "code": "0405",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1529,
          "provinceID": 203,
          "name": "Quận Ngũ Hành Sơn",
          "code": "0404",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1528,
          "provinceID": 203,
          "name": "Quận Sơn Trà",
          "code": "0403",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1527,
          "provinceID": 203,
          "name": "Quận Thanh Khê",
          "code": "0402",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1526,
          "provinceID": 203,
          "name": "Quận Hải Châu",
          "code": "0401",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3713,
          "provinceID": 202,
          "name": "Quận mới",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3711,
          "provinceID": 202,
          "name": "Quận test 1",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3695,
          "provinceID": 202,
          "name": "Thành Phố Thủ Đức",
          "code": "3695",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3449,
          "provinceID": 202,
          "name": "Quận Vật Tư HCM",
          "code": "VT1358",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3448,
          "provinceID": 202,
          "name": "Quận Đặc Biệt DC",
          "code": "02202b",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2090,
          "provinceID": 202,
          "name": "Huyện Cần Giờ",
          "code": "0224",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1580,
          "provinceID": 202,
          "name": "Quận Đặc Biệt",
          "code": "02202",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1534,
          "provinceID": 202,
          "name": "Huyện Nhà Bè",
          "code": "0223",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1533,
          "provinceID": 202,
          "name": "Huyện Bình Chánh",
          "code": "0220",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1463,
          "provinceID": 202,
          "name": "Quận Thủ Đức",
          "code": "0218",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1462,
          "provinceID": 202,
          "name": "Quận Bình Thạnh",
          "code": "0216",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1461,
          "provinceID": 202,
          "name": "Quận Gò Vấp",
          "code": "0213",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1460,
          "provinceID": 202,
          "name": "Huyện Củ Chi",
          "code": "0221",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1459,
          "provinceID": 202,
          "name": "Huyện Hóc Môn",
          "code": "0222",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1458,
          "provinceID": 202,
          "name": "Quận Bình Tân Update",
          "code": "0219",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1457,
          "provinceID": 202,
          "name": "Quận Phú Nhuận",
          "code": "0217",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1456,
          "provinceID": 202,
          "name": "Quận Tân Phú",
          "code": "0215",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1455,
          "provinceID": 202,
          "name": "Quận Tân Bình",
          "code": "0214",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1454,
          "provinceID": 202,
          "name": "Quận 12",
          "code": "0212",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1453,
          "provinceID": 202,
          "name": "Quận 11",
          "code": "0211",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1452,
          "provinceID": 202,
          "name": "Quận 10",
          "code": "0210",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1451,
          "provinceID": 202,
          "name": "Quận 9",
          "code": "0209",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1450,
          "provinceID": 202,
          "name": "Quận 8",
          "code": "0208",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1449,
          "provinceID": 202,
          "name": "Quận 7",
          "code": "0207",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1448,
          "provinceID": 202,
          "name": "Quận 6",
          "code": "0206",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1447,
          "provinceID": 202,
          "name": "Quận 5",
          "code": "0205",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1446,
          "provinceID": 202,
          "name": "Quận 4",
          "code": "0204",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1444,
          "provinceID": 202,
          "name": "Quận 3",
          "code": "0203",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1443,
          "provinceID": 202,
          "name": "Quận 2",
          "code": "0202",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1442,
          "provinceID": 202,
          "name": "Quận 1",
          "code": "0201",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3450,
          "provinceID": 201,
          "name": "Quận Vật Tư HN",
          "code": "VT1359",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3442,
          "provinceID": 201,
          "name": "Quận Đặc Biệt",
          "code": "1A00",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3440,
          "provinceID": 201,
          "name": "Quận Nam Từ Liêm",
          "code": "0130",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3303,
          "provinceID": 201,
          "name": "Huyện Thường Tín",
          "code": "1B27",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 3255,
          "provinceID": 201,
          "name": "Huyện Phú Xuyên",
          "code": "1B28",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 2004,
          "provinceID": 201,
          "name": "Huyện Quốc Oai",
          "code": "1B20",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1915,
          "provinceID": 201,
          "name": "Huyện Chương Mỹ",
          "code": "1B21",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1810,
          "provinceID": 201,
          "name": "Huyện Ứng Hòa",
          "code": "1B26",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1809,
          "provinceID": 201,
          "name": "Huyện Thanh Oai",
          "code": "1B24",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1808,
          "provinceID": 201,
          "name": "Huyện Thạch Thất",
          "code": "1B19",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1807,
          "provinceID": 201,
          "name": "Huyện Phúc Thọ",
          "code": "1B18",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1806,
          "provinceID": 201,
          "name": "Huyện Mỹ Đức",
          "code": "1B25",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1805,
          "provinceID": 201,
          "name": "Huyện Hoài Đức",
          "code": "1B23",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1804,
          "provinceID": 201,
          "name": "Huyện Đan Phượng",
          "code": "1B22",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1803,
          "provinceID": 201,
          "name": "Huyện Ba Vì",
          "code": "1B17",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1711,
          "provinceID": 201,
          "name": "Thị xã Sơn Tây",
          "code": "1B16",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1710,
          "provinceID": 201,
          "name": "Huyện Thanh Trì",
          "code": "1A11",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1703,
          "provinceID": 201,
          "name": "Huyện Gia Lâm",
          "code": "1A12",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1583,
          "provinceID": 201,
          "name": "Huyện Sóc Sơn",
          "code": "1A14",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1582,
          "provinceID": 201,
          "name": "Huyện Đông Anh",
          "code": "1A13",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1581,
          "provinceID": 201,
          "name": "Huyện Mê Linh",
          "code": "1B29",
          "type": 3,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1542,
          "provinceID": 201,
          "name": "Quận Hà Đông",
          "code": "1B15",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1493,
          "provinceID": 201,
          "name": "Quận Thanh Xuân",
          "code": "1A07",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1492,
          "provinceID": 201,
          "name": "Quận Tây Hồ",
          "code": "1A05",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1491,
          "provinceID": 201,
          "name": "Quận Long Biên",
          "code": "1A09",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1490,
          "provinceID": 201,
          "name": "Quận Hoàng Mai",
          "code": "1A08",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1489,
          "provinceID": 201,
          "name": "Quận Hoàn Kiếm",
          "code": "1A02",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1488,
          "provinceID": 201,
          "name": "Quận Hai Bà Trưng",
          "code": "1A03",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1486,
          "provinceID": 201,
          "name": "Quận Đống Đa",
          "code": "1A04",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1485,
          "provinceID": 201,
          "name": "Quận Cầu Giấy",
          "code": "1A06",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1484,
          "provinceID": 201,
          "name": "Quận Ba Đình",
          "code": "1A01",
          "type": 1,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }, {
          "districtId": 1482,
          "provinceID": 201,
          "name": "Quận Bắc Từ Liêm",
          "code": "0110",
          "type": 2,
          "createdAt": "2022-09-19 22:30:56",
          "updatedAt": "2022-09-19 22:30:56"
        }],
        {transaction}
      );
      await transaction.commit();
    } catch (err) {
      console.log('==== seeders wards error: ', err);
      await transaction.rollback();
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
