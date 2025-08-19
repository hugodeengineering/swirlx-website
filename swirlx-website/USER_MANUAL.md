# SwirlX Website - User Manual

## Purpose
This manual explains how to manage and update the SwirlX website when the developer is not available. It covers basic operations, content updates, and troubleshooting.

---

## Table of Contents
1. [Website Overview](#website-overview)
2. [Accessing the Website](#accessing-the-website)
3. [Content Management](#content-management)
4. [Common Updates](#common-updates)
5. [Troubleshooting](#troubleshooting)
6. [Emergency Procedures](#emergency-procedures)
7. [Contact Information](#contact-information)

---

## Website Overview

### What is this website?
- **SwirlX Company Website** - Professional marketing site for heat exchangers
- **Purpose** - Generate leads, showcase technology, build brand presence
- **Technology** - Built with React, hosted on Vercel

### Key Sections
1. **Homepage** - Company introduction and main messaging
2. **Technology** - Product showcase and specifications
3. **About** - Company story, mission, and values
4. **Contact** - Contact form and business information

---

## Accessing the Website

### Public Website
- **URL:** `https://swirlx-engineering.com`
- **Access:** Anyone can visit (public website)
- **Purpose:** Customer-facing marketing site

### Admin Access (If Needed)
- **Vercel Dashboard:** `https://vercel.com/dashboard`
- **GitHub Repository:** `https://github.com/hugodeengineering/swirlx-website`
- **Note:** Admin access requires developer setup

---

## Content Management

### What You CAN Update (No Technical Knowledge Required)

#### 1. Company Information
- **Company name, address, phone**
- **Business hours, contact details**
- **Mission statements, company values**
- **Team member information**

#### 2. Product Information
- **Product descriptions**
- **Technical specifications**
- **Pricing information**
- **Product images**

#### 3. Marketing Content
- **Headlines and taglines**
- **Company story and background**
- **Customer testimonials**
- **Industry news and updates**

### What You CANNOT Update (Requires Developer)
- **Website structure and layout**
- **Technical functionality**
- **Design and styling**
- **New features or sections**

---

## Common Updates

### Updating Company Contact Information

#### Step 1: Identify the File
- **File:** `src/components/Contact.jsx`
- **Location:** Contact section of the website

#### Step 2: Edit the Information
```jsx
// Example of what to look for:
<div className="contact-info">
  <h3>Contact Information</h3>
  <p>Phone: (555) 123-4567</p>  {/* ← Change this */}
  <p>Email: info@swirlx.com</p>  {/* ← Change this */}
  <p>Address: 123 Business St, City, State</p>  {/* ← Change this */}
</div>
```

#### Step 3: Save and Deploy
- **Save the file** in your code editor
- **Wait for automatic deployment** (usually 1-2 minutes)
- **Check the live website** to confirm changes

### Updating Product Information

#### Step 1: Identify the File
- **File:** `src/components/Technology.jsx`
- **Location:** Technology section of the website

#### Step 2: Edit the Information
```jsx
// Example of what to look for:
<div className="product-specs">
  <h3>Technical Specifications</h3>
  <p>Efficiency: 95%</p>  {/* ← Change this */}
  <p>Capacity: 1000 kW</p>  {/* ← Change this */}
  <p>Operating Temperature: -40°C to +85°C</p>  {/* ← Change this */}
</div>
```

#### Step 3: Save and Deploy
- **Save the file** in your code editor
- **Wait for automatic deployment**
- **Verify changes on live website**

---

## Troubleshooting

### Website Not Loading

#### Check 1: Internet Connection
- **Test:** Visit other websites
- **Solution:** Check your internet connection

#### Check 2: Website Status
- **Test:** Visit `https://swirlx-engineering.com`
- **If down:** Contact developer immediately
- **If slow:** Wait a few minutes, try again

#### Check 3: Browser Issues
- **Test:** Try different browser (Chrome, Firefox, Safari)
- **Solution:** Clear browser cache and cookies

### Content Not Updating

#### Check 1: File Saved
- **Verify:** File is saved in your editor
- **Look for:** File name shows no asterisk (*)

#### Check 2: Deployment Status
- **Wait:** 1-2 minutes for automatic deployment
- **Check:** Refresh the website

#### Check 3: Correct File
- **Verify:** You're editing the right file
- **Check:** File path and name

### Website Looks Broken

#### Check 1: Browser Cache
- **Solution:** Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- **Alternative:** Clear browser cache

#### Check 2: Different Device
- **Test:** Check on phone or different computer
- **If same issue:** Contact developer

#### Check 3: Wait and Retry
- **Solution:** Wait 5-10 minutes, refresh
- **If persists:** Contact developer

---

## Emergency Procedures

### Website Completely Down

#### Immediate Actions
1. **Don't panic** - This is usually temporary
2. **Wait 5 minutes** - Often resolves automatically
3. **Check different devices** - Confirm it's not just your computer
4. **Contact developer** - Use emergency contact information

#### What to Tell the Developer
- **Issue:** "Website is completely down"
- **When:** "Started at [time]"
- **What you tried:** "Refreshed, different browser, different device"
- **Business impact:** "Customers can't access our site"

### Content Accidentally Deleted

#### Immediate Actions
1. **Don't make more changes**
2. **Don't save the file**
3. **Close the file without saving**
4. **Contact developer immediately**

#### What to Tell the Developer
- **Issue:** "I accidentally deleted content from [filename]"
- **What was deleted:** "Company contact information"
- **When:** "Just happened at [time]"
- **Business impact:** "Website shows wrong information"

### Security Concerns

#### Immediate Actions
1. **Don't click any suspicious links**
2. **Don't enter any information**
3. **Take screenshots** of any suspicious content
4. **Contact developer immediately**

#### What to Tell the Developer
- **Issue:** "I see suspicious content/links on the website"
- **What you saw:** "Strange popup/redirect/error message"
- **When:** "Just happened at [time]"
- **Screenshots:** "I have screenshots to share"

---

## Contact Information

### Developer Contact (Primary)
- **Name:** [Your Name]
- **Email:** [Your Email]
- **Phone:** [Your Phone]
- **Response Time:** Usually within 2-4 hours

### Emergency Contact (After Hours)
- **Phone:** [Emergency Phone]
- **Response Time:** Within 1 hour for critical issues

### Vercel Support (Hosting Issues)
- **URL:** `https://vercel.com/support`
- **Response Time:** 24-48 hours for non-critical issues

### GitHub Support (Code Issues)
- **URL:** `https://github.com/hugodeengineering/swirlx-website/issues`
- **Response Time:** 24-48 hours for non-critical issues

---

## Additional Resources

### Documentation Files
- **Technical Documentation:** `TECHNICAL_DOCS.md`
- **Update Procedures:** `UPDATE_GUIDE.md`
- **Presentation Guide:** `PRESENTATION_GUIDE.md`

### Training Materials
- **Video Tutorials:** Available upon request
- **Hands-on Training:** Schedule with developer
- **FAQ Document:** Common questions and answers

### Best Practices
- **Always backup** before making changes
- **Test changes** on a small section first
- **Document changes** you make
- **Communicate** with team about updates

---

## Quick Reference

### Common File Locations
- **Contact Info:** `src/components/Contact.jsx`
- **Product Info:** `src/components/Technology.jsx`
- **Company Info:** `src/components/About.jsx`
- **Main Page:** `src/App.jsx`

### Update Process
1. **Edit file** in code editor
2. **Save file** (Ctrl+S or Cmd+S)
3. **Wait 1-2 minutes** for deployment
4. **Check live website** to confirm

### Emergency Steps
1. **Don't panic**
2. **Document the issue**
3. **Contact developer**
4. **Wait for response**

---

## Conclusion

This manual provides you with the essential knowledge to manage the SwirlX website when the developer is not available. Remember:

- **Most updates are simple** and don't require technical knowledge
- **When in doubt, contact the developer** rather than risk breaking something
- **Document all changes** you make for future reference
- **The website is designed to be user-friendly** and easy to manage

**You've got this!**

---

*Last Updated: [Current Date]  
Version: 1.0  
Maintained by: [Your Name]*
