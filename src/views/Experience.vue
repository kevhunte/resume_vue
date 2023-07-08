<template>
  <div class="page">
    <div id="experienceContainer" class="containers">
      <h2 class="resHeaders">Experience</h2>

      <div class="titles">
        <h3>Software Engineer, Gopuff</h3>
        <h5>
          Warehousing - Outbound Fulfillment Systems. May 2021 - Current. New
          York, NY
        </h5>
        <ul>
          <li>
            Designed, built and maintained warehouse management systems to
            fulfill the needs of quick commerce
          </li>
          <li>
            Participated in cross-functional projects in a lean environment
          </li>
          <li>Implemented features that directly impact operation KPIs</li>
        </ul>
      </div>

      <div class="titles">
        <h3>Software Test Engineer, Real-Time Technology Solutions</h3>
        <h5>
          Con Edison, Digital Customer Experience (DCX). August 2019 - April
          2021. New York, NY
        </h5>
        <ul>
          <li>
            Lead of functional testing for Con Edison's billing and usage data
            visualization effort
          </li>
          <li>
            Point of contact for outage functional testing with DCX's Report
            Outage System
          </li>
          <li>
            Major contributor to integration test codebase for DCX's Platform
            and Services team
          </li>
        </ul>

        <h5>Delta Dental. June - July 2019</h5>
        <ul>
          <li>
            Migrated a work item collection from HP's ALM to Microsoft's TFS (1
            million+ items)
          </li>
          <li>
            Consumed Microsoft's TFS / Azure DevOps API in the .NET framework
          </li>
        </ul>
      </div>
      <div class="titles">
        <h3>Software Developer, University of Connecticut</h3>
        <h5>Senior Design Project. August 2018 - May 2019</h5>
        <ul>
          <li>Created a server-less web application using AWS</li>
          <li>Developed and integrated REST API with API Gateway and Lambda</li>
          <li>
            Stored and retrieved user data using DynamoDB and a HTML5,
            Bootstrap, and JQuery frontend
          </li>
        </ul>

        <h5>LifeRhythm REU. May - September 2018</h5>
        <ul>
          <li>
            Refactored and developed LifeRhythm exercise application to Android
            8.0.
          </li>
          <li>Integrated Google's Activity Recognition/Transition API.</li>
          <li>Consumed REST API hosted on AWS EC2</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style scoped>
li {
  list-style: none;
  padding: 1rem 0;
}

ul {
  padding: 0;
}
</style>
