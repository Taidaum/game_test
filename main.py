import pygame

pygame.init()

#CONSTANTS:

SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
BLACK = (0,0,0,0)
GREEN = (0,255,0)
RED = (255,0,0)

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
clock = pygame.time.Clock()

#IMAGE
soldier = pygame.image.load('soldier.png').convert_alpha()

#INSIDE GAME
player = soldier.get_rect()
obstacle = pygame.Rect((300,150,50,50))
print(player)

run = True
pos = 'parado'
while run:
    
    clock.tick(60)
    #GAME BACKGROUND
    screen.fill(BLACK)
    #COLLISION 
    col = BLACK
    if player.colliderect(obstacle):
        col = RED
   
    #DRAW RENDER
    pygame.draw.rect(screen,col,player)
    pygame.draw.rect(screen,(0,255,255), obstacle)
    
    screen.blit(soldier, player)
    
    key = pygame.key.get_pressed()
    if key[pygame.K_a] == True:
        player.x -= 2
        pos = 'para esquerda'
    elif key[pygame.K_d] == True:
        player.x += 2
        pos = 'para direita'
    elif key[pygame.K_w] == True:
        player.y -= 2
        pos = 'para cima'
    elif key[pygame.K_s] == True:
        player.y += 2
        pos = 'para baixo'
        
    for event in pygame.event.get():
        print(pos)
        if event.type == pygame.QUIT:
            run = False
            
    pygame.display.update()            
            
pygame.quit()