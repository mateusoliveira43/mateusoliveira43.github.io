body = '''

    '''

with open('linha.txt', 'w') as writer:
    body = body.replace('\n', '')
    body = body.replace('   ', ' ')
    body = body.replace('  ', ' ')
    body = body.replace("'", "\\'")
    writer.write(body)
