const axios = require('axios')

describe('the cats api', () => {

  let catRecord
  const invalidId = 9999999999

  jest.setTimeout(10000)

  const baseUrl = 'http://localhost:8080/cats'

  describe('basic CRUD', () => {

    test('POST to /cats creates an object, and returns the created object with a generated id', async () => {
      let newCat = {name: 'Mittens'}
      let response = await axios.post(baseUrl, newCat)
      expect(response.data.id).toBeDefined()
      expect(response.data.name).toEqual(newCat.name)
      catRecord = response.data
    })

    test('POST to /cats a second time creates a new object, with a unique id', async () => {
      let newCat = {name: 'Mittens II'}
      let response = await axios.post(baseUrl, newCat)
      expect(response.data.id).toBeDefined()
      expect(response.data.id).not.toEqual(catRecord.id)
    })

    test('GET to /cats returns a list of cats that contains the previously created cat object', async () => {
      let response = await axios.get(`${baseUrl}`)
      let cats = response.data
      expect(Array.isArray(cats)).toBeTruthy()

      let matchingCat = cats.find(cat => cat.id === catRecord.id)
      expect(matchingCat).toBeDefined()
    })

    test('GET to /cats/:id returns the same object created from the first POST request when called with the generated id', async () => {
      let response = await axios.get(`${baseUrl}/${catRecord.id}`)
      expect(response.data.id).toEqual(catRecord.id)
      expect(response.data.name).toEqual(catRecord.name)
    })

    test('GET to /cats/:id returns a 404 status code for a cat that does not exist', async () => {
      expect.assertions(1)
      try {
        await axios.get(`${baseUrl}/${invalidId}`)
      } catch(err) {
        expect(err.response.status).toEqual(404)
      }
    })

    test('PUT to /cats/:id updates the record identified by :id', async () => {
      let updatedCat = {id: catRecord.id, name: 'Mittens III'}
      let response = await axios.put(`${baseUrl}/${catRecord.id}`, updatedCat)
      expect(response.data.id).toEqual(catRecord.id)
      expect(response.data.name).toEqual(updatedCat.name)
      catRecord = response.data
    })

    test('PUT to /cats/:id with an invalid id responds with a 404 status code', async () => {
      expect.assertions(1)
      try {
        await axios.put(`${baseUrl}/${invalidId}`, {})
      } catch(err) {
        expect(err.response.status).toEqual(404)
      }
    })

    test('DELETE to /cats/:id removes the record', async () => {
      expect.assertions(2)

      let response = await axios.delete(`${baseUrl}/${catRecord.id}`)
      expect(response.status).toEqual(204)

      try {
        await axios.get(`${baseUrl}/${catRecord.id}`)
      } catch(err) {
        expect(err.response.status).toEqual(404)
      }
    })

    test('DELETE to /cats/:id with an invalid id responds with a 404 status code', async () => {
      expect.assertions(1)

      try {
        await axios.delete(`${baseUrl}/${invalidId}`)
      } catch(err) {
        expect(err.response.status).toEqual(404)
      }
    })

  })

})
