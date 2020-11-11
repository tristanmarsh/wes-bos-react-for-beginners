import React from "react"

export const AddFishForm = () => {
  const createFish = (e) => {
    e.preventDefault()

    const { name, price, status, desc, image } = Object.fromEntries(
      Object.entries(e.target).map(([key, value]) => [value.name, value.value])
    )

    const fish = { name, price, status, desc, image }
    console.log(fish)
  }

  return (
    <form name="addFishForm" className="fish-edit" onSubmit={createFish}>
      <input type="text" name="name" placeholder="Fish Name" />
      <input type="text" name="price" placeholder="Fish Price" />
      <select name="status">
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" placeholder="Fish Description"></textarea>

      <input type="text" name="image" placeholder="fish image" />
      <button type="submit">+ Add Item</button>
    </form>
  )
}
