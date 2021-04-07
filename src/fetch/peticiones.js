async function peticiones(url) {
  const api = url;
  const response = await fetch(api, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYxMDRlOGEyNGI1NzAwMjBjNmM2ZmQiLCJpYXQiOjE2MTY5NzA5ODR9.ftsUHOrtrsPSYbzN1CY0ZHSkqtkbmjdrdyllrqJmy-E",
    },
  });
  const data = await response.json();
  return data;
}

async function peticionHistory() {
  const response = await fetch(
    "https://coding-challenge-api.aerolab.co/user/history",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYxMDRlOGEyNGI1NzAwMjBjNmM2ZmQiLCJpYXQiOjE2MTY5NzA5ODR9.ftsUHOrtrsPSYbzN1CY0ZHSkqtkbmjdrdyllrqJmy-E",
      },
    }
  );
  const data = await response.json();
  return data;
}

async function peticionPostRendem(_id) {
  const product = {
    productId: _id,
  };
  const response = await fetch(
    "https://coding-challenge-api.aerolab.co/redeem",
    {
      method: "POST",
      headers: {
        mode: "no-cors",
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYxMDRlOGEyNGI1NzAwMjBjNmM2ZmQiLCJpYXQiOjE2MTY5NzA5ODR9.ftsUHOrtrsPSYbzN1CY0ZHSkqtkbmjdrdyllrqJmy-E",
      },
      body: JSON.stringify(product),
    }
  );
  const data = await response.json();
  return data;
}

async function peticionAumentPoints(amount) {
  const newPoints = {
    amount: amount,
  };

  const api = "https://coding-challenge-api.aerolab.co/user/points";
  const response = await fetch(api, {
    method: "POST",
    headers: {
      mode: "no-cors",
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYxMDRlOGEyNGI1NzAwMjBjNmM2ZmQiLCJpYXQiOjE2MTY5NzA5ODR9.ftsUHOrtrsPSYbzN1CY0ZHSkqtkbmjdrdyllrqJmy-E",
    },
    body: JSON.stringify(newPoints),
  });
  const data = await response.json();
  return data;
}

export {
  peticiones,
  peticionHistory,
  peticionPostRendem,
  peticionAumentPoints,
};
