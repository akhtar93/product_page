let products = [];
function init() {
  document.addEventListener('DOMContentLoaded', function(event) {
    onBodyLoaded(event);
  });
}
// onBodyLoaded will be called when body has been fully loaded
// bodyReference is a reference of the body element

function onBodyLoaded() {
  products = productList;
  const body = document.querySelector('body');
  createProductBody(body);
}
function createProductBody(body) {
  const sectionData = [
    {
      key: 'clothes',
      id: 'clothesSection',
      isAccessory: false
    },
    {
      key: 'accessories',
      id: 'accessoriesSection',
      isAccessory: true
    }
  ];
  for(let i = 0; i < sectionData.length; i++) {
    const sectionHtml = createSections(sectionData[i].id, sectionData[i].key);
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    sectionHtml.append(cardWrapper);
    if (!sectionData[i].isAccessory) {
      const clothesData = products.filter((prod) => {
        return !prod.isAccessory
      });
      for(let i = 0; i < clothesData.length; i++) {
        const clothCard = createClothesCard(clothesData[i]);
        cardWrapper.append(clothCard)
      }
    } else {
      const accessories = products.filter((prod) => {
        return prod.isAccessory
      });
      for (let i = 0; i<accessories.length; i++) {
        const accessoriesCard = createAccessoriesCard(accessories[i]);
        cardWrapper.append(accessoriesCard)
      }
    }
    body.append(sectionHtml);
  }
}
function createSections(sectionId, sectionKey) {
  const section = document.createElement('section');
  section.id = sectionId;
  section.classList.add(`section-${sectionKey}`);
  return section;
}
function createClothesCard(clothData) {
  const cardElement = createCard(clothData.preview, clothData.name, clothData.brand, clothData.price);
  return cardElement;
}
function createAccessoriesCard(accessories) {
  const cardElement = createCard(accessories.preview, accessories.name, accessories.brand, accessories.price);
  return cardElement;
}
function createCard(image, name, brand, price) {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card-content');
  const previewImage = document.createElement('img');
  previewImage.src = image;
  previewImage.classList.add('preview-image');
  const productInfoWrapper = document.createElement('div');
  productInfoWrapper.classList.add('product-info');
  const productName = document.createElement('div');
  productName.innerHTML = name;
  productName.classList.add('product-name')
  const brandName = document.createElement('div');
  brandName.innerHTML = brand;
  brandName.classList.add('brand-name');
  const priceTag = document.createElement('div');
  priceTag.innerHTML = price;
  priceTag.classList.add('price-tag');
  productInfoWrapper.append(productName, brandName, priceTag)
  cardWrapper.append(previewImage, productInfoWrapper);
  return cardWrapper;
}
init();