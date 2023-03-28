export async function getProdiuctList(searchTerm) {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products?name_like=${
      searchTerm ? searchTerm : ""
    }`
  );

  if (!response.ok) {
    const errormsg=  { message: response.statusText, status: response.status }
    throw errormsg;
  }

  const data = await response.json();
  return data;
}

export async function getProduct(id) {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products/${id}`
  );
  
  if (!response.ok) {
    const errormsg=  { message: response.statusText, status: response.status }
    throw errormsg;
  }
  const data = await response.json();
  return data;
}

export async function getFeatureProductList() {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/featured_products`
  );
  
  if (!response.ok) {
    const errormsg=  { message: response.statusText, status: response.status }
    throw errormsg;
  }
  const data = await response.json();
  return data;
}
