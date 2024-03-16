import pandas as pd

def getDataframeSize(players: pd.DataFrame) -> List[int]:
    return [len(players.index), players.columns.size]
