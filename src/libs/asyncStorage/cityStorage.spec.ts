import { getStorageCity, saveStorageCity , removeStorageCity} from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"

const newCity: CityProps = {
  id: "1",
  latitude: 123,
  longitude: 456,
  name: "São Paulo"
}


describe("Storage: CityStorage", ()=> {
  it("should be return null when dont't have a city storaged", async ()=> {
    const response = await getStorageCity()

    expect(response).toBeNull()
  })

  it("should be return city storaged", async ()=> {
    saveStorageCity(newCity)
    const response = await getStorageCity()

    expect(response).toEqual(newCity)
  })

  it("should be remove city storage", async ()=> {
    saveStorageCity(newCity)
    removeStorageCity()
    const response = await getStorageCity()

    expect(response).toBeNull()
  })
})