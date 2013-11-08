---
layout: post
title:  Ativando e desativando touchpads não identificados
category: Linux
author: Ataxexe
tags:
---

Alguns touchpads são complicados de serem instalados no Linux, o meu é um desses casos. Eu não estava com vontade de instalar o driver dele somente pra usar a função de ativar e desativar quando eu estivesse com o mouse plugado, então, refatorei um script que [encontrei][script] jogado pela internet e vou deixar o resultado compartilhado com vocês:

~~~sh
#!/bin/bash

usage() {
  echo """Usage: ${0} OPTION

  on     : Enables the TouchPad
  off    : Disabled the TouchPad
  toggle : Toggles the TouchPad state
  """
}

toggle() {
  local touchpadStatus=$(xinput list-props $touchpadID | grep "Device Enabled" | awk -F ":" '{print $2}')
  set_touchpad "$(( (${touchpadStatus} + 1) % 2))"
}

set_touchpad() {
  xinput --set-prop $touchpadID "Device Enabled" $1
}

touchpadString="PS/2 Generic Mouse"
touchpadID=$(xinput list | grep "$touchpadString" | awk -F " " '{print $6}' | awk -F "=" '{print $2}')

if [[ $# == 1 ]]; then
  arg="${1,,}"
  case "${1,,}" in
    on     ) set_touchpad 1 ;;
    off    ) set_touchpad 0 ;;
    toggle ) toggle         ;;
    *   ) echo "Option not recognized." && usage ;;
  esac
else
  usage
fi
~~~

O script é bem simples de se entender, não vou entrar em maiores detalhes. Apenas uma coisa deve ser observada: é necessário trocar o valor da variável `touchpadString` pelo nome mapeado do seu touchpad (geralmente os que não são reconhecidos como tal possuem aquele nome genérico).

Pra quem já utiliza o [SODA][], o script fica mais simples de ser usado. O resultado está logo abaixo:

~~~sh
#!/bin/sh

parameter touchpad-id "ID" "Sets the touchpad id" || {
  touchpadString="PS/2 Generic Mouse"
  TOUCHPAD_ID=$(xinput list | grep "$touchpadString" | awk -F " " '{print $6}' | awk -F "=" '{print $2}')
}

task toggle "Toggle touchpad state"
toggle() {
  local state=$(xinput list-props $TOUCHPAD_ID | grep "Device Enabled" | awk -F ":" '{print $2}')
  set_touchpad "$(( (${state} + 1) % 2))"
}

task on "Enable touchpad"
on() {
  set_touchpad 1
}

task off "Disable touchpad"
off() {
  set_touchpad 0
}

set_touchpad() {
  xinput --set-prop $TOUCHPAD_ID "Device Enabled" $1
}
~~~

Para facilitar as coisas, mapeie um dos scripts para uma combinação de teclas (eu usei `Meta+F3` pra ficar mais parecido com a combinação original, já que o KDE não suporta a tecla `Fn` nas combinações).

[script]: <https://ask.fedoraproject.org/question/7485/how-disable-the-touchpad>
[soda]: <https://github.com/ataxexe/soda>