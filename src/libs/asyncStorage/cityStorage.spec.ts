import { getStorageCity } from "@libs/asyncStorage/cityStorage"

describe("Storage: CityStorage", ()=> {
  it("should be return null when dont't have a city storaged", async ()=> {
    const response = await getStorageCity()

    expect(response).toBeNull()
  })
})