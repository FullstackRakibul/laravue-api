<template>

        <div class="w-full bg-bgcolor ">
            <div class="flex justify-between items-center h-[50px]">
                <div class="p-3 coursor-pointer hover:bg-white hover:rounded hover:shadow">
                    <i class="pi pi-bars "></i>
                </div>
                <div class="py-2 ">
                        <InputText type="text" v-model="value" class="h-[40px]" placeholder="Search On ShowCase" />
                </div>
                <div class="flex space-x-3 items-center justify-center px-3">
                    <div class="text-md">Hola ! How are you today ?</div>
                    
                    <Avatar icon="pi pi-user" class="mr-2" style="background-color:#ff5f20;; color: #ffffff" shape="circle" @click="toggle" aria-haspopup="true" aria-controls="overlay-menu" />
                    
                    <Menu id="overlay-menu" ref="menu" :model="items" :popup="true" />
                </div>
            </div>
        </div>
</template>

<script >
export default {
	data() {
		return {
			items: [
				{
					label: 'Profile',
					icon: 'pi pi-user',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'My ShowCase',
					icon: 'pi pi-book',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
				{
					label: 'My Request',
					icon: 'pi pi-send',
					url: '#'
				},
				{
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    to: '/fileupload'
                }
			]
		}
	},
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    }
}
</script>
