# YES LOGISTICS SERVICE (YLS)

A modern, pixel-close logistics transportation website inspired by the TransHub design reference and fully branded with genuine business information from the official **YES LOGISTICS SERVICE** company credentials.

---

## 🏢 Company Profile (From Official Credentials)

- **Company Name:** YES LOGISTICS SERVICE
- **Tagline:** AN ENTIRE LOGISTICS SOLUTION
- **Business Type:** Fleet Owner & Transport Contractor
- **Speciality:** ODC Consignment Specialist across India
- **Established Date:** 1 July 2021
- **Registered Office:** CTS 1937 S1 Nilratna Apt BLD 2F, Chinchwad, Pune 411033, Maharashtra
- **Hotline Numbers:** +91 7021277197 / +91 7020057149
- **Official Email:** ylspune@gmail.com
- **Registration Details:**
  - PAN: `AYYPM5626L`
  - GSTIN: `27AYYPM5626L1ZH`
  - UDYAM Certificate: `UDAM-MH-26-0145431`
  - Shop & Establishment: `2131000315404073`
  - Banker: HDFC Bank LTD

---

## 📍 All-India Branch Network

1. **Pune (MH) — Headquarters**  
   *Contact:* Mr. Sandeep Kumar (+91 7888190624)  
   *Address:* CTS 1937 1S Nilratan Apt, Chinchwad Gaon, Pune – 411033
2. **Bangalore (KA)**  
   *Contact:* Mr. Dheeraj Shukla (+91 9415819488)  
   *Address:* 205 Block 2nd Floor Himalaya Plaza, Bangalore – 560053
3. **Vadodara (GJ)**  
   *Contact:* Mr. Umesh Chandra (+91 8469001491)  
   *Address:* B51 Kailash Pati Society, Ranoli, Vadodara – 391350
4. **Jeypore (OD)**  
   *Contact:* Mr. Vineet Mishra (+91 9337474004)  
   *Address:* Near Prashad Rao Peta, Sombartota Koraput, Odisha – 764001
5. **Prayagraj (UP)**  
   *Contact:* Mr. Aniket Mishra (+91 8858899855)  
   *Address:* C2/70 Awantika Avash, Naini, Prayagraj, Uttar Pradesh – 211008

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router, React 19, TypeScript)
- **Styling:** Tailwind CSS with custom YLS design tokens
- **Icons:** Lucide React
- **Storage:** MongoDB driver with UUID identifiers + resilient fallback
- **Design Inspiration:** TransHub ThemeVillage Layout & Structure

---

## 🎨 Color Palette

- **Dark Navy:** `#06112E`
- **Navy Blue:** `#07152F`
- **Orange Red:** `#F15A38`
- **Brand Yellow:** `#F8C62E`
- **Logo Blue:** `#175A9D`
- **White:** `#FFFFFF`
- **Light Background:** `#F5F7FA`
- **Muted Text:** `#6C7890`

---

## 🌐 Routes & Structure

- `/` — Homepage matching TransHub layout with YLS branding (Hero slider, statistics, about, services, process, why choose us, live tracking, quote, branch network, clients, testimonials, blog, footer)
- `/about-us/` — Company history, vision, mission, quality promise, registrations, and fleet overview
- `/services/` — Detailed breakdowns of all 15+ logistics capabilities including ODC trailers, mechanical flatbeds, warehousing, and crane arrangements
- `/quote/` — Full-length commercial freight quote form with UUID tracking
- `/contact-us/` — Registered office, branch directory, direct phone links, and enquiry form
- `/case-studies/` — Documented project movements (52m Girder, Warehouse Staging, Multi-State Fleet, 50T Crane Handover)
- `/blog/` — Technical freight articles on ODC movement, delay reduction, and warehousing

---

## 🔌 API Endpoints

- `POST /api/quote` — Submit commercial freight quote request. Generates a UUID and stores in MongoDB `quotes` collection.
- `GET /api/quote` — Fetch submitted quote requests.
- `GET /api/track?trackingId=TRACKING_ID` — Real-time consignment status check with validation, verified timeline milestones, and not-found states.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or build and run production server
npm run build
npm run start -p 3000
```
