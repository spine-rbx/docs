<script>
import { useData } from 'vitepress'
import ApiLink from './ApiLink.vue'
import ApiDescription from './ApiDescription.vue'
import SummaryLink from './SummaryLink.vue'
import TypeLabel from './TypeLabel.vue'

export default {
    data() {
        return {
            fm: useData().frontmatter,

        };
    },
    components: { ApiLink, ApiDescription, SummaryLink, TypeLabel },
}
</script>

<template>
	<ol v-for="c in fm.classes" style="padding-left:0">
		<h1>{{ c.name }}</h1>
		<h4 v-if="c.extends">Extends <ApiLink to="c.extends">{{ c.extends }}</ApiLink></h4>

		<ApiDescription :text="c.description"/>

        <h2>Summary</h2>
        <div v-if="c.types.length > 0">
            <h3>Types</h3>
            <ol v-for="v in c.types">
                <SummaryLink :name="v.name" :description="v.shortDescription"/>
            </ol>
        </div>

        <div v-if="c.properties.length > 0">
            <h3>Properties</h3>
            <ol v-for="v in c.properties">
                <SummaryLink :name="v.name" :description="v.shortDescription"/>
            </ol>
        </div>

        <div v-if="c.methods.length > 0">
            <h3>Methods</h3>
            <ol v-for="v in c.methods">
                <SummaryLink :name="v.name" :description="v.shortDescription"/>
            </ol>
        </div>

        <div v-if="c.types.length > 0">
            <h2>Types</h2>
            
            <ol v-for="v in c.types">
                <h3 style="">{{ v.name }}</h3>
                <TypeLabel :text="v.shortDescription"/>
                <ApiDescription :text="v.description"/>
            </ol>
        </div>
	</ol>
</template>