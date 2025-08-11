// Developer object from spreadsheet
const developer = {
    Username: "codeNinja",
    YearsExperience: "5.5 years",
    isActive: "True",
    pictureUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander",
    email: "ninja@example.com",
    phone: "123-456-7889",
    skills: "JavaScript, React, Node.js",
    bio: "Full stack specialist with a passion for building scalable web applications and delivering seamless user experiences."
};

// Main container
const card = document.createElement('div');
card.classList.add('portfolio-card');

// Banner
const banner = document.createElement('div');
banner.classList.add('card-banner');

// Profile image
const img = document.createElement('img');
img.src = developer.pictureUrl;
img.alt = `${developer.Username}'s avatar`;

// Status badge
const statusBadge = document.createElement('span');
statusBadge.classList.add('status-badge');
statusBadge.textContent = developer.inactive === "True" ? "isActive" : "Active";
statusBadge.classList.add(developer.inactive === "True" ? 'isActive' : 'active');

// Info section
const info = document.createElement('div');
info.classList.add('card-info');

// Name
const name = document.createElement('h2');
name.textContent = developer.Username;

// Experience
const exp = document.createElement('p');
exp.innerHTML = `<strong>Experience:</strong> ${developer.YearsExperience}`;

// Email (clickable)
const email = document.createElement('p');
email.innerHTML = `<strong>Email:</strong> <a href="mailto:${developer.email}">${developer.email}</a>`;

// Phone (clickable)
const phone = document.createElement('p');
phone.innerHTML = `<strong>Phone:</strong> <a href="tel:${developer.phone}">${developer.phone}</a>`;

// Skills (badges)
const skillsContainer = document.createElement('div');
skillsContainer.classList.add('skills');
developer.skills.split(",").forEach(skill => {
    const badge = document.createElement('span');
    badge.classList.add('skill-badge');
    badge.textContent = skill.trim();
    skillsContainer.appendChild(badge);
});

// Bio
const bio = document.createElement('p');
bio.classList.add('bio');
bio.textContent = developer.bio;

// Assemble card
banner.appendChild(img);
banner.appendChild(statusBadge);
card.appendChild(banner);

info.appendChild(name);
info.appendChild(exp);
info.appendChild(email);
info.appendChild(phone);
info.appendChild(skillsContainer);
info.appendChild(bio);
card.appendChild(info);

document.body.appendChild(card);
