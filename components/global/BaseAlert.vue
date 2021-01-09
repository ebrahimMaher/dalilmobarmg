<template>
  <div class="alert dark:bg-transparent border-r-4 p-4 mb-4" :class="`alert-${type}`">
    <div class="flex items-start">
      <div class="flex-shrink-0 self-start pt-1">
        <IconInfo v-if="type === 'info' || type === 'success'" class="alert-icon" />
        <IconNext v-else-if="type === 'next'" class="alert-icon" />
        <IconTip v-else-if="type === 'tip'" class="alert-icon" />
        <IconStar v-else-if="type === 'star'" class="alert-icon" />
        <IconAlert v-else class="alert-icon" />
      </div>
      <div class="mr-2 alert-content text-sm leading-7">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'warning'
    }
  }
}
</script>

<style scoped>
.alert{
  @apply leading-loose;
}
.alert p {
  @apply leading-loose m-0 !important;
}


/* Warning Icon */
.alert-warning {
  @apply bg-orange-100 border-orange-400;
}

.alert-warning code {
  @apply bg-orange-200 shadow-none;
}

.alert-warning .alert-icon {
  @apply text-orange-400;
}

.alert-warning .alert-content {
  @apply text-orange-700;
}

.dark-mode .alert-warning {
  @apply border-orange-500;
}

.dark-mode .alert-warning .alert-content code {
  @apply text-orange-400;
}


/* Error Icon */
.alert-error {
  @apply bg-red-100 border-red-400;
}

.alert-error code {
  @apply border border-red-200 shadow-none;
}

.alert-error .alert-icon {
  @apply text-red-400;
}

.alert-error .alert-content {
  @apply text-red-700;
}

.dark-mode .alert-error {
  @apply border-red-600;
}
.dark-mode .alert-error .alert-icon{
  @apply text-red-600;
}

.dark-mode .alert-error .alert-content code {
  @apply text-red-400;
}

/* Tip & Success  */
.alert-tip, .alert-success {
  @apply bg-green-100 border-green-500;
}

.alert-tip code, .alert-success code {
  @apply bg-green-100 shadow-none;
}

.alert-tip .alert-icon, .alert-success .alert-icon{
  @apply text-green-600;
}

.alert-tip .alert-content, .alert-success .alert-content {
  @apply text-green-700;
}

.dark-mode .alert-tip, .dark-mode .alert-success {
  @apply border-green-500;
}
.dark-mode .alert-tip .alert-icon, .dark-mode .alert-success .alert-icon{
  @apply text-green-400;
}

.dark-mode .alert-tip .alert-content code, .dark-mode .alert-success .alert-content code{
  @apply text-green-400;
}

/* Info Icon */
.alert-info {
  @apply bg-blue-50 border-blue-400;
}

.alert-info code {
  @apply bg-blue-100 shadow-none;
}

.alert-info .alert-icon {
  @apply text-blue-400;
}

.alert-info .alert-content {
  @apply text-blue-700;
}

.dark-mode .alert-info {
  @apply border-blue-600;
}

.dark-mode .alert-info .alert-content code {
  @apply text-blue-400;
}

/* Next Icon */
.alert-next {
  @apply bg-gray-100 border-gray-400;
}

.alert-next code {
  @apply bg-gray-200 shadow-none;
}

.alert-next .alert-icon {
  @apply text-gray-400;
}

.alert-next .alert-content {
  @apply text-gray-700;
}

.dark-mode .alert-next {
  @apply border-dark-onSurfaceStrong;
}


/* Star Icon */
.alert-star {
  @apply bg-purple-100 border-purple-400;
}

.alert-star code {
  @apply bg-purple-200 shadow-none;
}

.alert-star .alert-icon {
  @apply text-purple-400;
}

.alert-star .alert-content {
  @apply text-purple-700;
}

.dark-mode .alert-star {
  @apply bg-purple-800 border-purple-700;
}

.dark-mode .alert-star .alert-content {
  @apply text-gray-300 bg-purple-800 border-purple-700;
}

.dark-mode .alert-star .alert-content code {
  @apply bg-purple-800 !important;
}



/* dark for all */

.dark-mode .alert {
  @apply bg-dark-surface;
}

.dark-mode .alert .alert-content {
  @apply bg-transparent text-dark-onSurfacePrimary;
}

.dark-mode .alert .alert-content code {
  @apply bg-dark-surface border border-dark-border;
}
</style>
