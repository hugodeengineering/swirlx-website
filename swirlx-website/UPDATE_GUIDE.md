# 🔄 SwirlX Website - Update Procedures Guide

## 🎯 **Purpose**
This guide provides step-by-step instructions for making common updates to the SwirlX website. It's designed for non-technical users who need to update content when the developer is not available.

---

## 📋 **Table of Contents**
1. [Before You Begin](#before-you-begin)
2. [Setting Up Your Environment](#setting-up-your-environment)
3. [Common Update Procedures](#common-update-procedures)
4. [Content Update Examples](#content-update-examples)
5. [Testing Your Changes](#testing-your-changes)
6. [Troubleshooting Updates](#troubleshooting-updates)
7. [Emergency Rollback](#emergency-rollback)
8. [Best Practices](#best-practices)

---

## ⚠️ **Before You Begin**

### **What You Need**
- **Computer** with internet access
- **Code Editor** (VS Code recommended)
- **GitHub Account** (if making code changes)
- **Basic Text Editing Skills**

### **What You Don't Need**
- **Programming knowledge**
- **Technical expertise**
- **Server access**
- **Database knowledge**

### **Safety First**
- **Always backup** before making changes
- **Test changes** on a small section first
- **Don't panic** if something goes wrong
- **Contact developer** if unsure

---

## 🛠️ **Setting Up Your Environment**

### **Step 1: Install Code Editor**
1. **Download VS Code** from https://code.visualstudio.com/
2. **Install VS Code** on your computer
3. **Open VS Code** and familiarize yourself with the interface

### **Step 2: Access the Website Files**
1. **Go to GitHub:** https://github.com/hugodeengineering/swirlx-website
2. **Click "Code"** button (green button)
3. **Click "Download ZIP"** to download all files
4. **Extract ZIP file** to your computer

### **Step 3: Open Project in VS Code**
1. **Open VS Code**
2. **File → Open Folder**
3. **Select the extracted folder** (swirlx-website)
4. **Wait for VS Code to load** the project

---

## 🔄 **Common Update Procedures**

### **Procedure 1: Update Company Contact Information**

#### **Step 1: Locate the Contact File**
1. **In VS Code, look at the left sidebar**
2. **Expand the `src` folder**
3. **Expand the `components` folder**
4. **Click on `Contact.jsx`**

#### **Step 2: Find Contact Information**
1. **Look for text like this:**
```jsx
<div className="contact-info">
  <h3>Contact Information</h3>
  <p>Phone: (555) 123-4567</p>  {/* ← This is what you change */}
  <p>Email: info@swirlx.com</p>  {/* ← This is what you change */}
  <p>Address: 123 Business St, City, State</p>  {/* ← This is what you change */}
</div>
```

#### **Step 3: Make Your Changes**
1. **Click on the text** you want to change
2. **Type your new information**
3. **Make sure to keep the format** (don't delete symbols like `{/* */}`)

#### **Step 4: Save and Deploy**
1. **Press Ctrl+S (or Cmd+S on Mac)** to save
2. **Wait 1-2 minutes** for automatic deployment
3. **Check the live website** to confirm changes

### **Procedure 2: Update Product Information**

#### **Step 1: Locate the Technology File**
1. **In VS Code, click on `Technology.jsx`**
2. **Look for product specifications**

#### **Step 2: Find Product Details**
1. **Look for text like this:**
```jsx
<div className="product-specs">
  <h3>Technical Specifications</h3>
  <p>Efficiency: 95%</p>  {/* ← Change this */}
  <p>Capacity: 1000 kW</p>  {/* ← Change this */}
  <p>Operating Temperature: -40°C to +85°C</p>  {/* ← Change this */}
</div>
```

#### **Step 3: Update the Information**
1. **Click on the values** you want to change
2. **Type the new specifications**
3. **Keep the format** (don't delete the `{/* */}` comments)

#### **Step 4: Save and Check**
1. **Save the file** (Ctrl+S)
2. **Wait for deployment**
3. **Check the live website**

### **Procedure 3: Update Company Story**

#### **Step 1: Locate the About File**
1. **In VS Code, click on `About.jsx`**
2. **Look for company information sections**

#### **Step 2: Find Company Content**
1. **Look for text like this:**
```jsx
<div className="company-story">
  <h2>Our Story</h2>
  <p>SwirlX was founded in 2020...</p>  {/* ← Change this */}
</div>

<div className="mission">
  <h2>Our Mission</h2>
  <p>To provide the most efficient...</p>  {/* ← Change this */}
</div>
```

#### **Step 3: Update the Content**
1. **Click on the text** you want to change
2. **Type your new company story**
3. **Keep paragraphs short** for better readability

#### **Step 4: Save and Verify**
1. **Save the file** (Ctrl+S)
2. **Wait for deployment**
3. **Check the live website**

---

## 📝 **Content Update Examples**

### **Example 1: Phone Number Update**

#### **Before:**
```jsx
<p>Phone: (555) 123-4567</p>
```

#### **After:**
```jsx
<p>Phone: (555) 987-6543</p>
```

### **Example 2: Company Description Update**

#### **Before:**
```jsx
<p>SwirlX specializes in high-efficiency TPMS heat exchangers.</p>
```

#### **After:**
```jsx
<p>SwirlX is the leading manufacturer of high-efficiency TPMS heat exchangers, serving global markets with innovative technology.</p>
```

### **Example 3: Product Specification Update**

#### **Before:**
```jsx
<p>Efficiency: 95%</p>
```

#### **After:**
```jsx
<p>Efficiency: 97.5%</p>
```

---

## ✅ **Testing Your Changes**

### **Step 1: Check the Live Website**
1. **Go to:** https://swirlx-engineering.com
2. **Navigate to the section** you updated
3. **Verify your changes** are visible
4. **Check on different devices** (phone, tablet, computer)

### **Step 2: Test Functionality**
1. **Click on navigation links** to ensure they work
2. **Test contact forms** if you updated contact information
3. **Check responsive design** on mobile devices
4. **Verify animations** still work properly

### **Step 3: Document Your Changes**
1. **Keep a log** of what you changed
2. **Note the date and time** of changes
3. **Record any issues** you encountered
4. **Share updates** with your team

---

## 🛠️ **Troubleshooting Updates**

### **Problem: Changes Not Appearing**

#### **Solution 1: Wait Longer**
- **Wait 2-3 minutes** for deployment
- **Refresh the browser** (F5 or Ctrl+R)
- **Clear browser cache** if needed

#### **Solution 2: Check File Save**
- **Verify file is saved** in VS Code
- **Look for asterisk (*)** in file name (means unsaved)
- **Press Ctrl+S** to save again

#### **Solution 3: Check File Location**
- **Make sure you're editing** the right file
- **Check file path** in VS Code
- **Verify file name** spelling

### **Problem: Website Looks Broken**

#### **Solution 1: Browser Issues**
- **Try different browser** (Chrome, Firefox, Safari)
- **Clear browser cache** and cookies
- **Hard refresh** (Ctrl+F5 or Cmd+Shift+R)

#### **Solution 2: Wait and Retry**
- **Wait 5-10 minutes** for deployment to complete
- **Refresh the page** several times
- **Check if issue persists** on different devices

#### **Solution 3: Contact Developer**
- **Don't make more changes**
- **Take screenshots** of the problem
- **Contact developer immediately**

---

## 🚨 **Emergency Rollback**

### **If Something Goes Wrong**

#### **Step 1: Don't Panic**
- **Website issues** are usually temporary
- **Most problems** resolve automatically
- **Don't make more changes**

#### **Step 2: Document the Problem**
- **Take screenshots** of any errors
- **Note what you were trying to do**
- **Record the time** the problem occurred

#### **Step 3: Contact Developer**
- **Use emergency contact** information
- **Explain what happened** clearly
- **Share screenshots** if possible

#### **Step 4: Wait for Resolution**
- **Don't attempt** to fix technical issues
- **Wait for developer** to respond
- **Follow their instructions** carefully

---

## 📚 **Best Practices**

### **Before Making Changes**
1. **Plan your updates** in advance
2. **Backup current content** if possible
3. **Test on a small section** first
4. **Have a rollback plan** ready

### **During Updates**
1. **Make one change at a time**
2. **Save frequently** (Ctrl+S)
3. **Keep original formatting** intact
4. **Don't delete technical symbols**

### **After Updates**
1. **Test your changes** thoroughly
2. **Check on multiple devices**
3. **Document what you changed**
4. **Communicate updates** to your team

### **General Guidelines**
1. **Keep content concise** and professional
2. **Use consistent formatting** throughout
3. **Update regularly** to keep content fresh
4. **Maintain brand voice** and tone

---

## 🎯 **Quick Reference**

### **Common File Locations**
- **Contact Info:** `src/components/Contact.jsx`
- **Product Info:** `src/components/Technology.jsx`
- **Company Info:** `src/components/About.jsx`
- **Main Page:** `src/App.jsx`

### **Update Process**
1. **Open file** in VS Code
2. **Make changes** carefully
3. **Save file** (Ctrl+S)
4. **Wait for deployment** (1-2 minutes)
5. **Check live website**

### **Emergency Steps**
1. **Don't panic**
2. **Document the problem**
3. **Contact developer**
4. **Wait for response**

---

## 📞 **Support Resources**

### **Immediate Help**
- **Developer Contact:** [Your Name] - [Your Email]
- **Emergency Phone:** [Emergency Phone Number]
- **Response Time:** Usually within 2-4 hours

### **Documentation Files**
- **User Manual:** `USER_MANUAL.md`
- **Technical Docs:** `TECHNICAL_DOCS.md`
- **Presentation Guide:** `PRESENTATION_GUIDE.md`

### **External Resources**
- **VS Code Help:** https://code.visualstudio.com/docs
- **GitHub Help:** https://help.github.com/
- **Vercel Support:** https://vercel.com/support

---

## 🎉 **Conclusion**

This update guide provides you with the knowledge and confidence to make common content updates to the SwirlX website. Remember:

- **Most updates are simple** and don't require technical knowledge
- **Always test your changes** before considering them complete
- **When in doubt, contact the developer** rather than risk breaking something
- **Document everything** you do for future reference

**You're now equipped to manage the website content effectively!** 🚀

---

*Last Updated: [Current Date]  
Version: 1.0  
Maintained by: [Your Name]  
For Technical Support: [Your Email]*
