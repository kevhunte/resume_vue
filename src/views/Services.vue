<template>
<div class="page services">
    <h2 class="resHeaders">Software Development Services</h2>
    <p>
        For development services, please send a direct message on LinkedIn from the contact button
        available on the <router-link to="/">home page</router-link>. With the following title:
        <code>
            Freelance Development Opportunity
        </code>
    </p>
    <div class="tier">
        <h3>Tier 1: Frontend development</h3>
        <div class="tier-list animated fadeIn">
            <li>Shopify, Wordpress, self-hosted sites, etc.</li>
        </div>
    </div>
    <div class="tier">
        <h3>Tier 2: Backend development</h3>
        <div class="tier-list animated fadeIn">
            <li>Core business logic enhancements, cloud infrastructure integration etc.</li>
        </div>
    </div>
    <div class="tier">
        <h3>Tier 3: Full Stack development</h3>
        <div class="tier-list animated fadeIn">
            <li>Client and server side enhancements (tiers 1 + 2)</li>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Services',
}
</script>

<style scoped>

code {
  background-color: #f1f1f1;
  padding: 2px;
  font-size: 105%;
  font-weight: bold;
}

li {
  list-style: none;
  padding: 1rem 0;
}

.services {
    margin: 0 calc(15% - 10px);
}

.tier {
    padding-bottom: 2em;
}

/* .tier-list {} */

/* .tier:hover .tier-list {
    display: inline-block;
} */

</style>