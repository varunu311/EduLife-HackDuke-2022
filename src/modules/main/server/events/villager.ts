import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'Lender', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female132')
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Hey! How are you today? (Press SPACE to continue)', {
            talkWith: this
        })
        player.showText('I give you 10 gold.', {
            talkWith: this
        })
        player.gold += 10
    }
} 