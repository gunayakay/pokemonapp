async function customFetch(url, params = null) {
  return fetch(url, params).then((res) => res.json());
}

export default customFetch;

// Araştırma konusu: burada kullanılan yapı facade pattern olarak geçer. Gang of Four isimli
// yazılımcıların yazdığı Design Patterns adlı kitaptan esinlenilmiştir.
