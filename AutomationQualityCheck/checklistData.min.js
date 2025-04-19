// Select the first element with the class 'checklistInfo'
const checklistContainer = document.querySelector('.checklistInfo');
const TabShowInfo = document.querySelector('.dataShow');

fetch("https://script.google.com/macros/s/AKfycbzqBitR-j6jSYXvjCpdDWGVCxNIxVjSD08rIoCTs9QZiVRC1tGWSWb2A3NutYfhzx0/exec")
    .then(res => res.json())
    .then(data => {
        const grouped = {};

        // Group rows by category (column B)
        data.forEach((row) => {
          const label = row[0]?.trim();
          const category = row[1]?.trim();
  
          if (!label || !category) return; // skip if missing data
  
          if (!grouped[category]) {
            grouped[category] = [];
          }
  
          grouped[category].push(label);
        });
  
        // Render each group with a heading
        for (const [category, items] of Object.entries(grouped)) {
          const categoryTitle = `<h3>${category}</h3>`;
          checklistContainer.innerHTML += categoryTitle;
  
          items.forEach((label, index) => {
            const id = `check-${category}-${index}`;
            const checklistItemHTML = `
              <div class="check-item">
                <input type="checkbox" id="${id}" name="${category}" value="${label}" />
                <label for="${id}">${label}</label>
              </div>
            `;
            checklistContainer.innerHTML += checklistItemHTML;
          });
        }
      })
    .catch(err => console.error("Error reading sheet:", err));
