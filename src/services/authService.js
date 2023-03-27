export async function login(authDetail) {
  const requestOptions = {
    method: "post",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);
  if (!response.ok) {
    const errormsg={ message: response.statusText, status: response.status }
    throw errormsg;
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
}

export async function register(authDetail) {
  const requestOption = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOption);
  if (!response.ok) {
    const errormsg={ message: response.statusText, status: response.status }
    throw errormsg ;
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}
