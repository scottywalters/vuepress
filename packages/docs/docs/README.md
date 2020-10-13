---
home: true
heroImage: /hero.png
actionText: Get Started →
actionLink: /suncheck/
footer: © 2020 Sun Nuclear Corporation. All rights reserved.
---

<div class="features">
  <div class="feature">
    <img
      v-if="$site.themeConfig.featureOne"
        class=""
        :src="$withBase($site.themeConfig.featureOne)"
        alt="howdy"
      />
    <h2>SunCHECK™ 
    <br />Machine</h2>
    <p>Guidelines, componments, and best practices</p>
  </div>
  <div class="feature">
      <img
      v-if="$site.themeConfig.featureOne"
        class=""
        :src="$withBase('suncheck-patient.svg')"
        alt="howdy"
      />
    <h2>SunCHECK™<br />Patient</h2>
    <p>Content</p>
  </div>
  <div class="feature">
      <img
      v-if="$site.themeConfig.featureOne"
        class=""
        :src="$withBase('suncheck-platform.svg')"
        alt="howdy"
      />
    <h2>SunCHECK™<br />Platform</h2>
    <p>Content</p>
  </div>
</div>
