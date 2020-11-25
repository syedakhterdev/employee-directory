{
	"info": {
		"_postman_id": "8c6e559c-c241-4904-9cfd-23e8c7adaf53",
		"name": "Employee Directory",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Add Employee",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"title\": \"Mr\",\n    \"designation\": \"Node.JS Developer\",\n    \"gender\": \"Male\",\n    \"dob\": \"1994-04-22\",\n    \"phone\": \"+111123423423\",\n    \"email\":\"john@gmail.com\",\n    \"department\": \"IT\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/employee",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"employee"
					]
				}
			},
			"response": [
				{
					"name": "Add Employee",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"title\": \"Mr\",\n    \"designation\": \"Node.JS Developer\",\n    \"gender\": \"Male\",\n    \"dob\": \"1994-04-22\",\n    \"phone\": \"+111123423423\",\n    \"email\":\"john@gmail.com\",\n    \"department\": \"IT\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/employee",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"employee"
							]
						}
					},
					"status": "Created",
					"code": 201,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "319"
						},
						{
							"key": "ETag",
							"value": "W/\"13f-BVEi7PzlKN/nXogdJaWWg2vN25M\""
						},
						{
							"key": "Date",
							"value": "Wed, 25 Nov 2020 21:50:12 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						}
					],
					"cookie": [],
					"body": "{\n    \"_id\": \"5fbed19472edd75e3c02e43d\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"title\": \"Mr\",\n    \"designation\": \"Node.JS Developer\",\n    \"gender\": \"Male\",\n    \"dob\": \"1994-04-22T00:00:00.000Z\",\n    \"phone\": \"+111123423423\",\n    \"email\": \"john@gmail.com\",\n    \"department\": \"IT\",\n    \"createdAt\": \"2020-11-25T21:50:12.561Z\",\n    \"updatedAt\": \"2020-11-25T21:50:12.561Z\",\n    \"__v\": 0\n}"
				}
			]
		},
		{
			"name": "Get all employees",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/employee",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"employee"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get single employee",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/employee/5fbead54e033f455b4aa47f4",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"employee",
						"5fbead54e033f455b4aa47f4"
					]
				}
			},
			"response": [
				{
					"name": "Get single employee",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/employee/5fbead54e033f455b4aa47f4",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"employee",
								"5fbead54e033f455b4aa47f4"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "330"
						},
						{
							"key": "ETag",
							"value": "W/\"14a-UldDpIg6XmXjzwtKsaVRVDNDEE0\""
						},
						{
							"key": "Date",
							"value": "Wed, 25 Nov 2020 21:51:25 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						}
					],
					"cookie": [],
					"body": "{\n    \"_id\": \"5fbead54e033f455b4aa47f4\",\n    \"firstName\": \"john\",\n    \"lastName\": \"doe\",\n    \"title\": \"Mr\",\n    \"designation\": \"Dev\",\n    \"address\": \"iPlex\",\n    \"gender\": \"female\",\n    \"dob\": \"2000-01-01T00:00:00.000Z\",\n    \"phone\": \"+1112234235345\",\n    \"email\": \"john@gmail.com\",\n    \"department\": \"Doctor\",\n    \"createdAt\": \"2020-11-25T19:15:32.609Z\",\n    \"updatedAt\": \"2020-11-25T21:20:32.764Z\",\n    \"__v\": 0\n}"
				}
			]
		},
		{
			"name": "Upload profile picture",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "profilePic",
							"type": "file",
							"src": "/home/dev/Desktop/Screenshot from 2020-10-13 15-26-58.png"
						}
					]
				},
				"url": {
					"raw": "http://localhost:5000/uploadPic?id=5fbe784a41509f23045ea857",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"uploadPic"
					],
					"query": [
						{
							"key": "id",
							"value": "5fbe784a41509f23045ea857"
						}
					]
				}
			},
			"response": [
				{
					"name": "Upload profile picture",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "profilePic",
									"type": "file",
									"src": "/home/dev/Desktop/Screenshot from 2020-10-13 15-26-58.png"
								}
							]
						},
						"url": {
							"raw": "http://localhost:5000/uploadPic?id=5fbe784a41509f23045ea857",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"uploadPic"
							],
							"query": [
								{
									"key": "id",
									"value": "5fbe784a41509f23045ea857"
								}
							]
						}
					},
					"status": "Created",
					"code": 201,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "40"
						},
						{
							"key": "ETag",
							"value": "W/\"28-abVg016yx+CVVHc1IXeiqRWQfvQ\""
						},
						{
							"key": "Date",
							"value": "Wed, 25 Nov 2020 15:57:40 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"File uploaded successfully\"\n}"
				}
			]
		},
		{
			"name": "Update employee",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"title\": \"Mr\",\n    \"designation\": \"Node.JS Developer\",\n    \"gender\": \"Male\",\n    \"dob\": \"1994-04-22\",\n    \"phone\": \"+111123423423\",\n    \"email\":\"john@gmail.com\",\n    \"department\": \"IT\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/employee/5fbed21972edd75e3c02e43e",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"employee",
						"5fbed21972edd75e3c02e43e"
					]
				}
			},
			"response": [
				{
					"name": "Update employee",
					"originalRequest": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"title\": \"Mr\",\n    \"designation\": \"Node.JS Developer\",\n    \"gender\": \"Male\",\n    \"dob\": \"1994-04-22\",\n    \"phone\": \"+111123423423\",\n    \"email\":\"john@gmail.com\",\n    \"department\": \"IT\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/employee/5fbed21972edd75e3c02e43e",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"employee",
								"5fbed21972edd75e3c02e43e"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "319"
						},
						{
							"key": "ETag",
							"value": "W/\"13f-wsHXUVTABcM4GuPKItoWBT6ZPG4\""
						},
						{
							"key": "Date",
							"value": "Wed, 25 Nov 2020 21:53:17 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						}
					],
					"cookie": [],
					"body": "{\n    \"_id\": \"5fbed21972edd75e3c02e43e\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"title\": \"Mr\",\n    \"designation\": \"Node.JS Developer\",\n    \"gender\": \"Male\",\n    \"dob\": \"1994-04-22T00:00:00.000Z\",\n    \"phone\": \"+111123423423\",\n    \"email\": \"john@gmail.com\",\n    \"department\": \"IT\",\n    \"createdAt\": \"2020-11-25T21:52:25.823Z\",\n    \"updatedAt\": \"2020-11-25T21:52:25.823Z\",\n    \"__v\": 0\n}"
				}
			]
		},
		{
			"name": "Delete employee",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/employee/5fbed21972edd75e3c02e43e",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"employee",
						"5fbed21972edd75e3c02e43e"
					]
				}
			},
			"response": [
				{
					"name": "Delete employee",
					"originalRequest": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:5000/employee/5fbed21972edd75e3c02e43e",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"employee",
								"5fbed21972edd75e3c02e43e"
							]
						}
					},
					"status": "No Content",
					"code": 204,
					"_postman_previewlanguage": "plain",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Date",
							"value": "Wed, 25 Nov 2020 21:53:44 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						}
					],
					"cookie": [],
					"body": null
				}
			]
		}
	],
	"protocolProfileBehavior": {}
}